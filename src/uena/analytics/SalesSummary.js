import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "New Clients",
          data: this.props.data
            ? this.props.data
            : [300, 450, 600, 600, 400, 450, 410, 470, 480, 800, 600, 900, 400],
        },
      ],

      options: {
        chart: {
          type: "bar",
          height: 370,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",

            colors: {
              backgroundBarColors: [
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
              ],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 5,
            },
          },
          distributed: true,
        },
        colors: ["#ff720d"],
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        dataLabels: {
          enabled: false,
          colors: ["#000"],
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            bottom: 0,
            opacity: 1,
          },
        },
        xaxis: {
          categories: [
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
          ],
          labels: {
            style: {
              colors: "#787878",
              fontSize: "14px",
              fontFamily: "poppins",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              colors: "#7E7F80",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 100,
            },
            formatter: function (y) {
              return y.toFixed(0) + "k";
            },
          },
        },
        tooltip: {
          x: {
            show: true,
          },
        },
        responsive: [
          {
            breakpoint: 575,
            options: {
              chart: {
                height: 250,
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
          height={370}
        />
      </div>
    );
  }
}

export default SalesSummary;
