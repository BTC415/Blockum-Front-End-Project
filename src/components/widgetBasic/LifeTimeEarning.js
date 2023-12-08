import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class LifeTimeEarning extends Component {
  render() {
    const data = (canvas) => {
      const chart_widget_7 = document
        .getElementById("chart_widget_7")
        .getContext("2d");
      //generate gradient
      const chart_widget_7gradientStroke = chart_widget_7.createLinearGradient(
        0,
        0,
        0,
        250
      );
      chart_widget_7gradientStroke.addColorStop(0, "#ff2c53");
      chart_widget_7gradientStroke.addColorStop(1, "#ff2c53");

      // chart_widget_7.attr('height', '100');

      return {
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
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
            borderColor: chart_widget_7gradientStroke,
            borderWidth: "0",
            backgroundColor: chart_widget_7gradientStroke,
            hoverBackgroundColor: chart_widget_7gradientStroke,
          },
        ],
      };
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
            barPercentage: 0.6,
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
      <div>
        <Bar id="chart_widget_7" data={data} options={options} height={150} />
      </div>
    );
  }
}

export default LifeTimeEarning;
