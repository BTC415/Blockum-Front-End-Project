import React from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [28, 9, 21, 18, 24],
      options: {
        chart: {
          type: "donut",
          width: 210,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 5,
        },
        colors: ["#3A82EF", "#EE3CD2", "#FFB038", "#FF495F", "#5EE173"],
        legend: {
          position: "bottom",
          show: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
                show: false,
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
          type="donut"
          height={270}
        />
      </div>
    );
  }
}
export default DonutChart;
