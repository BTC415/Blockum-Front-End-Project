import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class DualLineChart extends Component {
  render() {
    const data = (canvas) => {
      const lineChart_3 = document
        .getElementById("lineChart_3")
        .getContext("2d");
      //generate gradient
      const lineChart_3gradientStroke1 = lineChart_3.createLinearGradient(
        500,
        0,
        100,
        0
      );
      lineChart_3gradientStroke1.addColorStop(0, "rgba(255, 114, 13, 1)");
      lineChart_3gradientStroke1.addColorStop(1, "rgba(255, 114, 13, 0.5)");

      const lineChart_3gradientStroke2 = lineChart_3.createLinearGradient(
        500,
        0,
        100,
        0
      );
      lineChart_3gradientStroke2.addColorStop(0, "rgba(255, 92, 0, 1)");
      lineChart_3gradientStroke2.addColorStop(1, "rgba(255, 92, 0, 1)");
      return {
        defaultFontFamily: "Poppins",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "My First dataset",
            data: [25, 20, 60, 41, 66, 45, 80],
            borderColor: lineChart_3gradientStroke1,
            borderWidth: "2",
            backgroundColor: "transparent",
            pointBackgroundColor: "rgba(255, 114, 13, 0.5)",
          },
          {
            label: "My First dataset",
            data: [5, 20, 15, 41, 35, 65, 80],
            borderColor: lineChart_3gradientStroke2,
            borderWidth: "2",
            backgroundColor: "transparent",
            pointBackgroundColor: "rgba(254, 176, 25, 1)",
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
        <Line data={data} options={options} height={150} id="lineChart_3" />
      </div>
    );
  }
}

export default DualLineChart;
