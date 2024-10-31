import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useTheme from "../../hooks/useTheme";

type Competency = {
  title: string;
  percentage: number;
  color: string;
};

const CompetencyChart: React.FC<{ data: Competency }> = ({ data }) => {
  const { theme } = useTheme();
  const chartData = [
    { name: "Completed", value: data.percentage },
    { name: "Remaining", value: 100 - data.percentage },
  ];

  return (
    <div className="flex flex-col md:items-start items-center">
      <ResponsiveContainer width={100} height={100}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={25}
            outerRadius={40}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            dataKey="value"
            isAnimationActive={false}
          >
            <Cell key="completed" fill={data.color} />
            <Cell key="remaining" fill="#d1d5db" />
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            style={{ fontSize: "14px", fontWeight: "bold", fill: "#333" }}
          >
            {`${data.percentage}%`}
          </text>
        </PieChart>
      </ResponsiveContainer>
      <span
        className={`font-semibold mt-2 ${
          theme === "dark" ? "text-dark-slate-light" : ""
        }`}
      >
        {data.title}
      </span>
    </div>
  );
};

export default CompetencyChart;
