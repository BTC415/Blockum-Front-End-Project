import React from "react";
import ReactApexChart from "react-apexcharts";

class RangeBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Buy",
          data: [
            {
              x: "2:00PM",
              y: [9200.0, 9600.0],
            },
            {
              x: "2:30PM",
              y: [9300.0, 9600.0],
            },
            {
              x: "3:00PM",
              y: [9150.0, 9500.0],
            },
            {
              x: "3:30PM",
              y: [9300.0, 9700.0],
            },
            {
              x: "4:00PM",
              y: [9200.0, 9600.0],
            },
            {
              x: "4:30PM",
              y: [9400.0, 9700.0],
            },
          ],
        },
        {
          name: "Sell",
          data: [
            {
              x: "2:00PM",
              y: [9370.0, 9550.0],
            },
            {
              x: "2:30PM",
              y: [9350.0, 9700.5],
            },
            {
              x: "3:00PM",
              y: [9275.0, 9482.0],
            },
            {
              x: "3:30PM",
              y: [9200.0, 9600.0],
            },
            {
              x: "4:00PM",
              y: [9350.0, 9500.0],
            },
            {
              x: "4:30PM",
              y: [9445.0, 9523.0],
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "rangeBar",
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
            startingShape: "rounded",
          },
        },
        colors: ["#61C277", "#FF3E3E"],
        dataLabels: {
          enabled: false,
        },
        markers: {
          shape: "circle",
        },
        legend: {
          show: false,
          fontSize: "12px",
          labels: {
            colors: "#000000",
          },
          markers: {
            width: 18,
            height: 18,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
          },
        },
        stroke: {
          show: true,
          width: 6,
          colors: ["transparent"],
        },
        grid: {
          borderColor: "#eee",
        },
        xaxis: {
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: false,
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            offsetX: 0,
            style: {
              colors: "#787878",
              fontSize: "12px",
              fontFamily: "poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        fill: {
          opacity: 1,
          colors: ["#61C277", "#FF3E3E"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
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
              plotOptions: {
                bar: {
                  columnWidth: "40%",
                },
              },
              chart: {
                height: 350,
              },
              xaxis: {
                labels: {
                  style: {
                    fontSize: "10px",
                  },
                },
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
          type="rangeBar"
          height={350}
        />
      </div>
    );
  }
}
export default RangeBarChart;
