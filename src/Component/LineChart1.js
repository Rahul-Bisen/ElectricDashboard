import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const LineChart1 = (cid) => {
  const [chartData, setChartData] = useState(null);
  const [jan , setJan] = useState("");
  const [id , setId] = useState("");
  
  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/ele/chartdata/4");
//         const data = await response.json();

//         const monthlyData = [
//           data.jan,
//           data.feb,
//           data.mar,
//           data.april,
//           data.may,
//           data.june,
//           data.july,
//           data.august,
//           data.sept,
//           data.oct,
//           data.nov,
//           data.dec,
//         ];
//         console.log(data)

//         setJan(data.jan);
//         setId(cid);

//         const updatedChartData = {
//           labels: labels,
//           datasets: [
//             {
//               label: `Consumer ${data.consumer_Id}`,
//               backgroundColor: "rgb(255, 99, 132)",
//               borderColor: "rgb(255, 99, 132)",
//               data: monthlyData,
//             },
//           ],
//         };

//         setChartData(updatedChartData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div style={{
        width: "200vw",
        height: "40vh",
        marginTop: "50px",
        marginLeft: "20px",
      }}>
       
        
      {chartData ? (
        <Line data={chartData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LineChart1;
