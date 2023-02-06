import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page b", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page c", uv: 300, pv: 2300, amt: 2400 },
  { name: "Page d", uv: 100, pv: 2400, amt: 2400 },
];
const ApexLineChart = () => {
  return (
    <div className="chart">
      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default ApexLineChart;
