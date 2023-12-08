import React, { PureComponent } from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -2000,
    pv: -2500,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: -2400,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class TotalCourse extends PureComponent {
  render() {
    return (
      <div
        style={{
          height: "150px",
          width: "100%",
        }}
      >
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            data={this.props.chartData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Bar dataKey="pv" fill="#222fb9" />
            <Bar dataKey="uv" fill="#209F84" />
            <Bar dataKey="amt" fill="#2781D5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
