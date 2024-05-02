import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
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

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Consumption kw/hr",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: props.integerArray
      },
    ],
  };

  return (
    <div
      style={{
        width: "200vw",
        height: "40vh",
        marginTop: "50px",
        marginLeft: "20px",
      }}
    >
      <Line data={data} />
    </div>
  );
};

export default LineChart;