import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class GradientBarChart extends Component {
  render() {
    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const barChart_2gradientStroke = ctx.createLinearGradient(0, 0, 0, 250);
      barChart_2gradientStroke.addColorStop(0, "rgba(255, 114, 13, 1)");
      barChart_2gradientStroke.addColorStop(1, "rgba(255, 114, 13, 0.5)");
      return {
        defaultFontFamily: "Poppins",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: barChart_2gradientStroke,
            borderWidth: "0",
            backgroundColor: barChart_2gradientStroke,
            hoverBackgroundColor: barChart_2gradientStroke,
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
            },
          },
        ],
        xAxes: [
          {
            // Change here
            barPercentage: 0.5,
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

export default GradientBarChart;
