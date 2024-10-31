import { Doughnut } from "react-chartjs-2";
import useTheme from "../../hooks/useTheme";

type HalfCircleChartProps = {
  percentage: number;
  color: string;
  label: string;
};

const HalfCircleChart = ({
  percentage,
  color,
  label,
}: HalfCircleChartProps) => {
  const { theme } = useTheme();
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, "#e5e7eb"],
        hoverBackgroundColor: [color, "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 100, height: 100 }} className="relative">
        <Doughnut data={data} options={options} />
        <div
          className={`absolute inset-0 top-8 flex items-center justify-center text-base font-semibold ${
            theme === "dark" ? "text-dark-gray-text" : ""
          }`}
        >
          {percentage}%
        </div>
      </div>
      <p
        className={`text-center  text-sm ${
          theme === "dark" ? "text-dark-gray-text" : "text-gray-text"
        }`}
      >
        {label}
      </p>
    </div>
  );
};
export default HalfCircleChart;
