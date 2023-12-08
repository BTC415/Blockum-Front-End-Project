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
          type: "area",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        colors: ["#FF720D"],
        dataLabels: {
          enabled: false,
        },
        markers: {
          shape: "circle",
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 4,
          curve: "straight",
          colors: ["#FF720D"],
        },

        grid: {
          borderColor: "#eee",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          labels: {
            style: {
              colors: "#7E7F80",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
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
        fill: {
          opacity: 1,
          colors: "#FAC7B6",
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
          type="area"
          height={370}
        />
      </div>
    );
  }
}

export default SalesSummary;
