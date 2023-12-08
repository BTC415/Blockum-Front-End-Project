import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class AllSell2 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: this.props.chartData,
          borderColor: "#2780d4",
          borderWidth: "2",
          backgroundColor: "transparent",
          pointBackgroundColor: "#2780d4",
          pointRadius: 0,
        },
      ],
    };

    const options = {
      legend: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
              max: 100,
              min: 0,
              stepSize: 20,
              padding: 0,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            display: false,
            ticks: {
              padding: 0,
              display: false,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
    };
    return (
      <div style={{ height: 150 }}>
        <Line data={data} options={options} height={150} />
      </div>
    );
  }
}

export default AllSell2;
