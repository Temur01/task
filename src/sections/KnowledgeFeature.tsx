import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import TopOfSection from "../components/TopOfSection";
import { competenciesKnowledge } from "../data/data";
import HalfCircleChart from "../components/charts/HalfCircleChart";
import useTheme from "../hooks/useTheme";
import BellCurveChart from "../components/charts/BellCurveChart";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const KnowledgeFeature = () => {
  const { theme } = useTheme();

  const lineData = {
    labels: ["12.06", "18.06", "03.07", "13.07", "14.07", "20.07", "24.07"],
    datasets: [
      {
        label: "Performance",
        data: [20, 50, 80, 60, 30, 75, 65],
        fill: false,
        borderColor: theme === "dark" ? "#74c0fc" : "#0E9CFF", // Light blue in dark mode
        backgroundColor: theme === "dark" ? "#74c0fc" : "#0E9CFF",
        pointBorderColor: theme === "dark" ? "#74c0fc" : "#0E9CFF",
        pointBackgroundColor: theme === "dark" ? "#74c0fc" : "#0E9CFF",
        tension: 0.3,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: theme === "dark" ? "#e9ecef" : "#495057",
        },
      },
      x: {
        ticks: {
          color: theme === "dark" ? "#e9ecef" : "#495057",
        },
      },
    },
  };

  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-dark-gray-light text-dark-white-slate"
          : "bg-white-slate text-gray-light"
      }`}
    >
      <div className="container p-6">
        <TopOfSection title="Билим тести" />
        <div className="grid grid-cols-8 gap-5 md:gap-10">
          <div className="sm:col-span-4 col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {competenciesKnowledge.map((comp, index) => (
                <HalfCircleChart
                  key={index}
                  percentage={comp.percentage}
                  color={comp.color}
                  label={comp.label}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 sm:col-span-4 col-span-8 flex flex-col items-center sm:items-start md:gap-12 sm:gap-8 gap-4">
            <div className="w-full max-w-sm">
              <Line data={lineData} options={lineOptions} />
            </div>

            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-blue-light ms-2">
                78%
              </h3>
              <div className="flex">
                <div
                  className={`flex items-center px-4 rounded-l-lg font-semibold bg-green-light ${
                    theme === "dark"
                      ? " text-gray-light"
                      : " text-white"
                  }`}
                >
                  Умумий натижа
                </div>

                <div
                  className={`h-8 w-8 rounded-r-lg bg-gray-200`}
                ></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 sm:col-span-4 col-span-8">
            <BellCurveChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeFeature;
