import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class FeeCollection extends Component {
  render() {
    const data = {
      labels: this.props.chartData,
      datasets: [
        {
          label: "My First dataset",
          data: this.props.chartData,
          backgroundColor: "#fa707e",
          borderColor: "#f77f8b",
          borderWidth: 3,
          strokeColor: "#F77F8B",
          capBezierPoints: !0,
          pointColor: "#fff",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#F77F8B",
          pointBorderWidth: 3,
          pointRadius: 0,
          pointHoverBackgroundColor: "#FFF",
          pointHoverBorderColor: "#F77F8B",
          pointHoverRadius: 0,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: false,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Value",
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0,
        },
        point: {
          radius: 0,
          borderWidth: 0,
        },
      },
      title: {
        display: false,
      },
    };
    return (
      <div style={{ height: 140, marginTop: "10px" }}>
        <Line data={data} options={options} height={140} />
      </div>
    );
  }
}

export default FeeCollection;
