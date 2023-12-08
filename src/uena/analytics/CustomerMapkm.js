import React from "react";
import ReactApexChart from "react-apexcharts";

class CustomerMapkm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: this.props.data
        ? this.props.data
        : [
            {
              name: "Income",
              data: [80, 24, 80, 90],
            },
            {
              name: "Expense",
              data: [40, 60, 20, 60],
            },
            {
              name: "Others",
              data: [20, 17, 5, 20],
            },
          ],

      options: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "60%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 3,
          colors: ["transparent"],
        },
        legend: {
          show: false,
          fontSize: "12px",
          markers: {
            width: 20,
            height: 20,
          },
          itemMargin: {
            horizontal: 10,
            vertical: 10,
          },
        },
        xaxis: {
          categories: ["Week1", "Week2", "Week3", "Week4"],
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 400,
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 400,
            },
          },
        },
        colors: ["#ff720d", "#787878", "#C4C4C4"],
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
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
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default CustomerMapkm;
