import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Widget1 extends Component {
  render() {
    const data = {
      labels: this.props.chartData,
      datasets: [
        {
          label: "My First dataset",
          data: this.props.chartData,
          backgroundColor: "#9CC0F7",
          borderColor: "#3A82EF",
          borderWidth: 2,
          strokeColor: "#3A82EF",
          capBezierPoints: !0,
          pointColor: "#fff",
          pointBorderColor: "#3A82EF",
          pointBackgroundColor: "#3A82EF",
          pointBorderWidth: 2.5,
          pointRadius: 1.5,
          pointHoverBackgroundColor: "#3A82EF",
          pointHoverBorderColor: "#3A82EF",
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
      <div style={{ height: 150 }}>
        <Line data={data} options={options} height={150} />
      </div>
    );
  }
}

export default Widget1;
