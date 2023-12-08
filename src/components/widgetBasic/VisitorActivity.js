import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class VisitorActivity extends Component {
  render() {
    const data = {
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
      datasets: [
        {
          label: "My First dataset",
          data: this.props.chartData,
          borderColor: "rgba(255, 114, 13, 1)",
          borderWidth: "0",
          backgroundColor: "rgba(255, 114, 13, 1)",
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,

      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              color: "rgba(89, 59, 219,0.1)",
              drawBorder: true,
            },
            ticks: {
              fontColor: "#999",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              zeroLineColor: "transparent",
            },
            ticks: {
              stepSize: 5,
              fontColor: "#999",
              fontFamily: "Nunito, sans-serif",
            },
          },
        ],
      },
      tooltips: {
        mode: "index",
        intersect: false,
        titleFontColor: "#888",
        bodyFontColor: "#555",
        titleFontSize: 12,
        bodyFontSize: 15,
        backgroundColor: "rgba(256,256,256,0.95)",
        displayColors: true,
        xPadding: 10,
        yPadding: 7,
        borderColor: "rgba(220, 220, 220, 0.9)",
        borderWidth: 2,
        caretSize: 6,
        caretPadding: 10,
      },
    };

    return (
      <div style={{ minHeight: "290px" }}>
        <Bar
          data={data}
          width={this.props.width ? this.props.width : 433}
          height={this.props.height ? this.props.height : 251}
          options={options}
        />
      </div>
    );
  }
}

export default VisitorActivity;
