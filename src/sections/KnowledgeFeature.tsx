import BellCurveChart from "../components/charts/BellCurveChart";
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
import TopOfSection from "../shared/TopOfSection";
import { competenciesKnowledge } from "../data/data";
import HalfCircleChart from "../components/charts/HalfCircleChart";

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
  const lineData = {
    labels: ["12.06", "18.06", "03.07", "13.07", "14.07", "20.07", "24.07"],
    datasets: [
      {
        label: "Performance",
        data: [20, 50, 80, 60, 30, 75, 65],
        fill: false,
        borderColor: "#0E9CFF",
        backgroundColor: "#0E9CFF",
        pointBorderColor: "#0E9CFF",
        pointBackgroundColor: "#0E9CFF",
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
        },
      },
    },
  };

  return (
    <section className="bg-white-slate p-6">
      <div className="container">
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
                <div className="flex items-center bg-green-light text-white px-4 rounded-l-lg font-semibold">
                  Умумий натижа
                </div>

                <div className="bg-gray-200 h-8 w-8 rounded-r-lg"></div>
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
