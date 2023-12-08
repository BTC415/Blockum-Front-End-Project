import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutChart extends Component {
  render() {
    const data = {
      weight: 5,
      defaultFontFamily: "Poppins",
      datasets: [
        {
          data: [45, 25, 20],
          borderWidth: 3,
          borderColor: "rgba(255,255,255,1)",
          backgroundColor: [
            "rgba(255, 114, 13, 1)",
            "rgba(120, 120, 120, 1)",
            "rgba(238, 60, 60, 1)",
          ],
          hoverBackgroundColor: [
            "rgba(255, 114, 13, 0.9)",
            "rgba(120, 120, 120, .9)",
            "rgba(238, 60, 60, .9)",
          ],
        },
      ],
      // labels: [
      //     "green",
      //     "green",
      //     "green",
      //     "green"
      // ]
    };

    const options = {
      weight: 1,
      cutoutPercentage: 70,
      responsive: true,
      maintainAspectRatio: false,
    };
    return (
      <div>
        <Doughnut data={data} options={options} height={150} />
      </div>
    );
  }
}

export default DoughnutChart;
