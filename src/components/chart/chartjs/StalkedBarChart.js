import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class StalkedBarChart extends Component {
  render() {
    const data = (canvas) => {
      const barChart_3 = canvas.getContext("2d");
      // const barChart_3 = document.getElementById("barChart_3").getContext('2d');
      //generate gradient
      const barChart_3gradientStroke = barChart_3.createLinearGradient(
        50,
        100,
        50,
        50
      );
      barChart_3gradientStroke.addColorStop(0, "rgba(255, 114, 13, 1)");
      barChart_3gradientStroke.addColorStop(1, "rgba(255, 114, 13, 0.5)");

      const barChart_3gradientStroke2 = barChart_3.createLinearGradient(
        50,
        100,
        50,
        50
      );
      barChart_3gradientStroke2.addColorStop(0, "rgba(120, 120, 120, 1)");
      barChart_3gradientStroke2.addColorStop(1, "rgba(120, 120, 120, 1)");

      const barChart_3gradientStroke3 = barChart_3.createLinearGradient(
        50,
        100,
        50,
        50
      );
      barChart_3gradientStroke3.addColorStop(0, "rgba(238, 60, 60, 1)");
      barChart_3gradientStroke3.addColorStop(1, "rgba(238, 60, 60, 1)");
      return {
        defaultFontFamily: "Poppins",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Red",
            backgroundColor: barChart_3gradientStroke,
            hoverBackgroundColor: barChart_3gradientStroke,
            data: ["12", "12", "12", "12", "12", "12", "12"],
          },
          {
            label: "Green",
            backgroundColor: barChart_3gradientStroke2,
            hoverBackgroundColor: barChart_3gradientStroke2,
            data: ["12", "12", "12", "12", "12", "12", "12"],
          },
          {
            label: "Blue",
            backgroundColor: barChart_3gradientStroke3,
            hoverBackgroundColor: barChart_3gradientStroke3,
            data: ["12", "12", "12", "12", "12", "12", "12"],
          },
        ],
      };
    };

    const options = {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    };
    return (
      <div>
        <Bar data={data} options={options} height={150} />
      </div>
    );
  }
}

export default StalkedBarChart;
