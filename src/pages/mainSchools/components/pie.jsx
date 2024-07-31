import { PieChart } from "@mui/x-charts/PieChart";

export default function PieBasic() {
  return (
    <PieChart
      className="text-white bg-white/60 rounded-lg"
      series={[
        {
          data: [
            { id: 0, value: 10, label: "series A", color: "blue" },
            { id: 1, value: 15, label: "series B" },
            { id: 2, value: 20, label: "series C" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
