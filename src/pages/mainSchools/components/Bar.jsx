import { BarChart } from "@mui/x-charts/BarChart";

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      className=""
      sx={(theme) => ({
        backgroundImage: `linear-gradient(rgba(${
          theme.palette.mode === "dark" ? "255,255,255" : "0, 0, 0"
        }, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${
          theme.palette.mode === "dark" ? "255,255,255" : "0, 0, 0"
        }, 0.1) 1px, transparent 1px)`,
      })}
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ["Akan", "Q2", "Q3", "Q4"], scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
