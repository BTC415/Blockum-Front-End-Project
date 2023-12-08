import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Widget2 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Expense",
          backgroundColor: "#ff2c53",
          hoverBackgroundColor: "#ff5777",
          data: this.props.chartData[0].data,
        },
        {
          label: "Earning",
          backgroundColor: "#F1F3F7",
          hoverBackgroundColor: "#F1F3F7",
          data: this.props.chartData[1].data,
        },
      ],
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
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: false,
            stacked: true,
            barPercentage: 0.2,
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
        yAxes: [
          {
            display: false,
            stacked: true,
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
      <div style={{ height: 180 }}>
        <Bar data={data} height={180} options={options} />
      </div>
    );
  }
}

export default Widget2;
