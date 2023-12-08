import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DonutChart extends Component {
  render() {
    const data = {
      weight: 0,
      defaultFontFamily: "Poppins",
      datasets: [
        {
          data: [this.props.value, 100 - this.props.value],
          borderWidth: 0,
          backgroundColor: [
            this.props.backgroundColor,
            this.props.backgroundColor2,
          ],
        },
      ],
    };

    const options = {
      cutoutPercentage: 77,
    };
    return (
      <div className="donught-chart" style={{ marginTop: "-10px" }}>
        <Doughnut data={data} options={options} height={120} width={120} />
      </div>
    );
  }
}

export default DonutChart;
