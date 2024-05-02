import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import LineChart1 from "./LineChart1";
import LineChart from "./LineChart";

const ConsumptionTable = () => {
  const [consumptionData, setConsumptionData] = useState([]);
  const [selectedConsumption, setSelectedConsumption] = useState(null);

  useEffect(() => {
    const fetchConsumptionData = async () => {
      try {
        const response = await fetch("http://localhost:8080/ele");
        const data = await response.json();
        setConsumptionData(data);
        console.log(data);
        console.log(selectedConsumption);
      } catch (error) {
        console.error("Error fetching consumption data:", error);
      }
    };

    fetchConsumptionData();
  }, []);

  const handleConsumerSelect = (consumption) => {
    setSelectedConsumption(consumption);
  };

//   const integerArray = selectedConsumption
//     ? Object.values(selectedConsumption).map((value) => parseInt(value, 10))
//     : [];

//     const integerArray = selectedConsumption
//   ? ["jan", "feb", "mar", "april", "may", "june", "july", "august", "sept", "oct", "nov", "dec"]
//       .map(key => parseInt(selectedConsumption[key], 10))
//       .filter(value => !isNaN(value))
//   : [];

  const integerArray = selectedConsumption
  ? ["jan", "feb", "mar", "april", "may", "june", "july", "august", "sept", "oct", "nov", "dec"]
      .map(key => {
        const value = selectedConsumption[key];
        return value !== null ? parseInt(value, 10) : 0;
      })
  : [];

  return (
    <Container>
        <div>
        <LineChart integerArray={integerArray} />
        </div>
        {selectedConsumption && (
        <div>
          <h2>Selected Consumption Details</h2>
          <p>Consumption ID: {selectedConsumption.consumption_id}</p>
          <p>Years: {selectedConsumption.years}</p>

          {/* Add more details as needed */}
        </div>
      )}
      <h1 className="my-4">Electricity</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Consumption ID</th>
            <th>Years</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>April</th>
            <th>May</th>
            <th>June</th>
            <th>July</th>
            <th>August</th>
            <th>Sept</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>
            <th>Consumer ID</th>
          </tr>
        </thead>
        <tbody>
          {consumptionData.map((consumption, index) => (
            <tr
              key={index}
              onClick={() => handleConsumerSelect(consumption)}
              style={{
                backgroundColor:
                  consumption.consumption_id ===
                  selectedConsumption?.consumption_id
                    ? "#f0f0f0"
                    : "inherit",
              }}
            >
              <td>{consumption.consumption_id}</td>
              <td>{consumption.years}</td>
              <td>{consumption.jan}</td>
              <td>{consumption.feb}</td>
              <td>{consumption.mar}</td>
              <td>{consumption.april}</td>
              <td>{consumption.may}</td>
              <td>{consumption.june}</td>
              <td>{consumption.july}</td>
              <td>{consumption.august}</td>
              <td>{consumption.sept}</td>
              <td>{consumption.oct}</td>
              <td>{consumption.nov}</td>
              <td>{consumption.dec}</td>
              <td>{consumption.consumer.consumer_Id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      
    </Container>
  );
};

export default ConsumptionTable;
