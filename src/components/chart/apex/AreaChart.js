import React from "react";
import ReactApexChart from "react-apexcharts";

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Recovered Patient",
          data: [500, 230, 600, 360, 700, 890, 750, 420],
        },
        {
          name: "New Patient",
          data: [250, 380, 200, 300, 200, 520, 380, 770],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          group: "social",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [2, 2],
          colors: ["#FF720D", "#2BC155"],
          curve: "straight",
        },
        legend: {
          show: false,
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
          markers: {
            fillColors: ["#FF720D", "#2BC155"],
            width: 19,
            height: 19,
            strokeWidth: 0,
            radius: 19,
          },
        },
        markers: {
          size: 6,
          border: 0,
          colors: ["#e36cd9", "#2BC155"],
          hover: {
            size: 6,
          },
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
          ],
        },
        yaxis: {
          labels: {
            style: {
              colors: "#3e4954",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 100,
            },
          },
        },
        fill: {
          colors: ["#e36cd9", "#2BC155"],
          type: "solid",
          opacity: 0.07,
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default AreaChart;
