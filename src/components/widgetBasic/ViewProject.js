import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class ViewProject extends Component {
  render() {
    const data = (canvas) => {
      const chart_widget_2 = document
        .getElementById("chart_widget_2")
        .getContext("2d");
      //generate gradient
      const chart_widget_2gradientStroke = chart_widget_2.createLinearGradient(
        0,
        0,
        0,
        250
      );
      chart_widget_2gradientStroke.addColorStop(0, "#430b58");
      chart_widget_2gradientStroke.addColorStop(1, "#6c2586");

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
            data: this.props.chartData,
            borderColor: chart_widget_2gradientStroke,
            borderWidth: "0",
            backgroundColor: chart_widget_2gradientStroke,
            hoverBackgroundColor: chart_widget_2gradientStroke,
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
            barPercentage: 0.1,
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
        <Bar id="chart_widget_2" data={data} options={options} height={150} />
      </div>
    );
  }
}

export default ViewProject;
