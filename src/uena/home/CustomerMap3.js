import React from "react";
import ReactApexChart from "react-apexcharts";

class CustomerMap3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: this.props.data,
      options: {
        chart: {
          type: "bar",
          height: 400,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "47%",
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
          categories: [
            "jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "nov",
            "dec",
          ],
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

        responsive: [
          {
            breakpoint: 575,
            options: {
              series: [
                {
                  name: "Income",
                  data: [80, 24, 80, 90, 80, 70],
                },
                {
                  name: "Expense",
                  data: [40, 60, 20, 60, 60, 20],
                },
                {
                  name: "Others",
                  data: [20, 17, 5, 20, 20, 10],
                },
              ],
              chart: {
                height: 250,
              },
              plotOptions: {
                bar: {
                  columnWidth: "65%",
                },
              },
              xaxis: {
                categories: ["jan", "Feb", "Mar", "Apr", "May", "Jun"],
              },
            },
          },
        ],
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
          height={400}
        />
      </div>
    );
  }
}

export default CustomerMap3;
