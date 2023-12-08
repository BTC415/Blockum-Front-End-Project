import React from "react";
import ReactApexChart from "react-apexcharts";

class ColumnChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "New Clients",
          data: [60, 20, 75, 40, 25, 70, 20, 40, 65, 50],
        },
        {
          name: "Retained Clients",
          data: [-70, -35, -60, -20, -30, -45, -70, -50, -45, -10],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 320,
          stacked: true,
          toolbar: {
            show: false,
          },
          sparkline: {
            //enabled: true
          },
          backgroundBarRadius: 5,
          offsetX: -10,
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
            endingShape: "rounded",
            colors: {
              backgroundBarColors: [
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
              ],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 5,
              opacity: 0,
            },
          },
          distributed: true,
        },
        colors: ["#0B2A97", "#FF9432"],

        grid: {
          show: true,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        dataLabels: {
          enabled: false,
          colors: ["#0B2A97", "#FF9432"],
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 1,
          },
        },
        xaxis: {
          categories: [
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
          ],
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 400,
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
          //show: false
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 400,
            },
          },
        },

        tooltip: {
          x: {
            show: true,
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

export default ColumnChart;
