import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

function GlucoseRate({ chartData }) {
  // const sampleData = chartData;
  return (
    <Sparklines data={chartData} height={50}>
      <SparklinesLine color="#FF720D" fill="rgba(59, 76, 184, .5)" />
      <SparklinesSpots />
    </Sparklines>
  );
}

export default GlucoseRate;
