import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

class RadarChart extends Component {
  render() {
    const data = (canvas) => {
      const radar_chart = document
        .getElementById("radar_chart")
        .getContext("2d");

      const radar_chartgradientStroke1 = radar_chart.createLinearGradient(
        500,
        0,
        100,
        0
      );
      radar_chartgradientStroke1.addColorStop(0, "rgba(54, 185, 216, .5)");
      radar_chartgradientStroke1.addColorStop(1, "rgba(75, 255, 162, .5)");

      const radar_chartgradientStroke2 = radar_chart.createLinearGradient(
        500,
        0,
        100,
        0
      );
      radar_chartgradientStroke2.addColorStop(0, "rgba(68, 0, 235, .5");
      radar_chartgradientStroke2.addColorStop(1, "rgba(68, 236, 245, .5");
      return {
        defaultFontFamily: "Poppins",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "My First dataset",
            data: [65, 59, 66, 45, 56, 55, 40],
            borderColor: "#f21780",
            borderWidth: "1",
            backgroundColor: radar_chartgradientStroke2,
          },
          {
            label: "My Second dataset",
            data: [28, 12, 40, 19, 63, 27, 87],
            borderColor: "#f21780",
            borderWidth: "1",
            backgroundColor: radar_chartgradientStroke1,
          },
        ],
      };
    };

    const options = {
      legend: false,
      maintainAspectRatio: false,
      scale: {
        ticks: {
          beginAtZero: true,
        },
      },
    };
    return (
      <div>
        <Radar data={data} options={options} height={150} id="radar_chart" />
      </div>
    );
  }
}

export default RadarChart;
