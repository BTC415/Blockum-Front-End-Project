import React from "react";
import { Pie } from "react-chartjs-2";

const TotalStudent = ({ chartData }) => {
  const data = {
    datasets: [
      {
        data: chartData,
        borderWidth: 0,
        backgroundColor: ["#7099ED", "#B3CCFF", "#9DBDFF"],
        hoverBackgroundColor: ["#7099ED", "#B3CCFF", "#9DBDFF"],
      },
    ],
    labels: [51, 24, 61],
  };

  const options = {
    responsive: true,
    legend: false,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: 100 }}>
      <Pie data={data} height={100} options={options} />
    </div>
  );
};

export default TotalStudent;
