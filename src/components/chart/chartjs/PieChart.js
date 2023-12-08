import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          data: [45, 25, 20, 10],
          borderWidth: 0,
          backgroundColor: [
            "rgba(255, 114, 13, .9)",
            "rgba(255, 114, 13, .7)",
            "rgba(255, 114, 13, .5)",
            "rgba(0,0,0,0.07)",
          ],
          hoverBackgroundColor: [
            "rgba(255, 114, 13, .9)",
            "rgba(255, 114, 13, .7)",
            "rgba(255, 114, 13, .5)",
            "rgba(0,0,0,0.07)",
          ],
        },
      ],
      labels: ["one", "two", "three", "four"],
    };

    const options = {
      responsive: true,
      legend: false,
      maintainAspectRatio: false,
    };
    return (
      <div>
        <Pie data={data} options={options} height={150} />
      </div>
    );
  }
}

export default PieChart;
