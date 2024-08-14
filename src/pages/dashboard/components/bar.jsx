import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, cutoff } = payload[0].payload; // Access name and cutoff from payload
    return (
      <div className="custom-tooltip bg-graySecondary text-white  p-2 shadow">
        <p className="label">{`Name: ${name}`}</p>
        <p className="intro">{`Cutoff: ${cutoff}`}</p>
      </div>
    );
  }

  return null;
};

const data = [
  {
    name: "Page A",
    c: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
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
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const formatYAxisTicks = (tickItem) => {
  return tickItem % 5 === 0 ? tickItem : ""; // Show only multiples of 5
};

export default class Bars extends PureComponent {
  render() {
    const bars = this.props.bars;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={bars}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 15]}
            tickFormatter={formatYAxisTicks}
            ticks={[0, 5, 10, 15]}
          />

          <RechartsTooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="cutoff" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
