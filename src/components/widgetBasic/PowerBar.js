import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class PowerBar extends Component {
  render() {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: this.props.chartData,
          borderColor: "rgba(255, 255, 255, .8)",
          borderWidth: "0",
          backgroundColor: "rgba(255, 255, 255, .8)",
          hoverBackgroundColor: "rgba(255, 255, 255, .8)",
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
              display: false,
              max: 100,
              min: 0,
              stepSize: 10,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: false,
            barPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    };

    return (
      <div style={{ height: 140 }}>
        <Bar data={data} height={140} options={options} />
      </div>
    );
  }
}

export default PowerBar;
