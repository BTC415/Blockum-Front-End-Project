import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class BasicLineChart extends Component {
  render() {
    const data = (canvas) => {
      return {
        defaultFontFamily: "Poppins",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "My First dataset",
            data: [25, 20, 60, 41, 66, 45, 80],
            borderColor: "rgba(255, 114, 13, 1)",
            borderWidth: "2",
            backgroundColor: "transparent",
            pointBackgroundColor: "rgba(255, 114, 13, 1)",
          },
        ],
      };
    };

    const options = {
      legend: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 100,
              min: 0,
              stepSize: 20,
              padding: 10,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              padding: 5,
            },
          },
        ],
      },
    };
    return (
      <div>
        <Line data={data} options={options} height={150} id="lineChart_1" />
      </div>
    );
  }
}

export default BasicLineChart;
