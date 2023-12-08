import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class FvtItemChart extends Component {
  render() {
    const data = {
      weight: 0,
      defaultFontFamily: "Poppins",
      datasets: [
        {
          data: [this.props.value, 100 - this.props.value],
          borderWidth: 0,
          backgroundColor: ["rgb(255, 114, 13,1)", this.props.backgroundColor2],
        },
      ],
    };

    const options = {
      cutoutPercentage: 80,
    };
    return (
      <div
        className="donught-chart"
        style={{ marginTop: "-10px", height: "80px", width: "80px" }}
      >
        <Doughnut data={data} options={options} height={80} width={80} />
      </div>
    );
  }
}

export default FvtItemChart;
