import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class MarketNow extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "forteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
      ],
      datasets: [
        {
          label: "Expense",
          backgroundColor: "#430b58",
          hoverBackgroundColor: "#6c2586",
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
            barPercentage: 1,
            barThickness: 5,
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
              max: 100,
              min: 0,
            },
          },
        ],
      },
    };

    return (
      <div style={{ height: 255 }}>
        <Bar data={data} height={255} options={options} />
      </div>
    );
  }
}

export default MarketNow;
