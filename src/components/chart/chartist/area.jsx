import React, { Component } from "react";
import ChartistGraph from "react-chartist";

function AreaChart() {
  var data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    series: [[12, 9, 7, 8, 5]],
  };

  var options = {
    fullWidth: true,
    showArea: true,
    chartPadding: {
      right: 40,
    },
    axisX: {
      showLabel: false,
      showGrid: false,
    },
  };

  var type = "Line";

  return (
    <>
      <ChartistGraph data={data} options={options} type={type} />
    </>
  );
}

export default AreaChart;
