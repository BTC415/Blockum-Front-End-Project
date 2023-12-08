import React, { Component } from "react";
import { Polar } from "react-chartjs-2";

class PolarChart extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      datasets: [
        {
          data: [15, 18, 9, 6, 19],
          borderWidth: 0,
          backgroundColor: [
            "rgba(255, 114, 13, 1)",
            "rgba(120, 120, 120, 1)",
            "rgba(238, 60, 60, 1)",
            "rgba(54, 147, 255, 1)",
            "rgba(255, 92, 0, 1)",
          ],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };
    return (
      <div>
        <Polar data={data} options={options} height={150} />
      </div>
    );
  }
}

export default PolarChart;
