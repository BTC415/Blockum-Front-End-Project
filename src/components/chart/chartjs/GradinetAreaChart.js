import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class GradientAreaChart extends Component {
  render() {
    const data = (canvas) => {
      const areaChart_2 = document
        .getElementById("areaChart_2")
        .getContext("2d");
      //generate gradient
      const areaChart_2gradientStroke = areaChart_2.createLinearGradient(
        0,
        1,
        0,
        500
      );
      areaChart_2gradientStroke.addColorStop(0, "rgba(238, 60, 60, 0.2)");
      areaChart_2gradientStroke.addColorStop(1, "rgba(238, 60, 60, 0)");

      areaChart_2.height = 100;

      return {
        defaultFontFamily: "Poppins",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "My First dataset",
            data: [25, 20, 60, 41, 66, 45, 80],
            borderColor: "#ff2625",
            borderWidth: "4",
            backgroundColor: areaChart_2gradientStroke,
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
              padding: 5,
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
        <Line id="areaChart_2" data={data} options={options} height={150} />
      </div>
    );
  }
}

export default GradientAreaChart;
