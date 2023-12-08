import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Distance",
          data: [70, 50, 80, 120, 120, 80, 120, 100],
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
          width: [10],
          colors: ["#FF720D"],
          curve: "smooth",
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
        },
        markers: {
          strokeWidth: [8],
          strokeColors: ["#FF720D"],
          border: 0,
          colors: ["#fff"],
          hover: {
            size: 13,
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          labels: {
            style: {
              colors: "#3E4954",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 100,
            },
          },
        },
        yaxis: {
          labels: {
            offsetX: -16,
            style: {
              colors: "#3E4954",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 100,
            },
          },
        },
        fill: {
          colors: ["#FF720D"],
          type: "solid",
          opacity: 0,
        },
        colors: ["#FF720D"],
        grid: {
          borderColor: "#f1f1f1",
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        responsive: [
          {
            breakpoint: 1601,
            options: {
              chart: {
                height: 350,
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 250,
              },
              markers: {
                strokeWidth: [4],
                strokeColors: ["#FF720D"],
                border: 0,
                colors: ["#fff"],
                hover: {
                  size: 6,
                },
              },
              stroke: {
                width: [6],
                colors: ["#FF720D"],
                curve: "smooth",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="customerMapkm">
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
export default LineChart;
