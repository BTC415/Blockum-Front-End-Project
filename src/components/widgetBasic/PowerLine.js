import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class PowerLine extends Component {
  render() {
    const data = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "My First dataset",
          data: this.props.chartData,
          backgroundColor: "#20DEA6",
          borderColor: "#46FFC8",
          borderWidth: 1,
          strokeColor: "#46FFC8",
          capBezierPoints: !0,
          pointColor: "#fff",
          pointBorderColor: "#46FFC8",
          pointBackgroundColor: "#46FFC8",
          pointBorderWidth: 1.5,
          pointRadius: 1,
          pointHoverBackgroundColor: "#46FFC8",
          pointHoverBorderColor: "#46FFC8",
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
      <div style={{ height: 140 }}>
        <Line data={data} options={options} height={140} />
      </div>
    );
  }
}

export default PowerLine;
