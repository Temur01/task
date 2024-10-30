import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
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

const competencies = [
  {
    label: "Конституциявий–ҳуқуқий саводхонлик",
    percentage: 33,
    color: "#ef4444",
  },
  {
    label: "Ахборот-коммуникация технологиялари",
    percentage: 79,
    color: "#22c55e",
  },
  {
    label: "Турли соҳадаги ислоҳотлардан хабардорлик",
    percentage: 78,
    color: "#22c55e",
  },
  { label: "Ўзбек тили ва адабиёти", percentage: 48, color: "#f59e0b" },
  {
    label: "Ўзбекистон тарихи ва маданияти",
    percentage: 100,
    color: "#2563eb",
  },
  {
    label: "Ақлий салоҳияти ва мантиқий фикрлаш",
    percentage: 55,
    color: "#f59e0b",
  },
];

interface HalfCircleChartProps {
  percentage: number;
  color: string;
  label: string;
}

const HalfCircleChart: React.FC<HalfCircleChartProps> = ({
  percentage,
  color,
  label,
}) => {
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
        <div className="absolute inset-0 top-8 flex items-center justify-center text-base font-semibold">
          {percentage}%
        </div>
      </div>
      <p className="text-center text-gray-text text-sm">{label}</p>
    </div>
  );
};

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
        <div className="flex items-center mb-4">
          <div className="w-2 h-6 bg-blue-light mr-2"></div>
          <h2 className="text-2xl font-bold text-gray-light">Билим тести</h2>
          <div className="flex-1 ml-4 border-t border-gray-200"></div>
        </div>
        <div className="grid grid-cols-8 gap-4 md:gap-6">
          <div className="col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {competencies.map((comp, index) => (
                <HalfCircleChart
                  key={index}
                  percentage={comp.percentage}
                  color={comp.color}
                  label={comp.label}
                />
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-col items-start  justify-between">
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

          {/* <div className="col-span-2">
            <BellCurveChart />
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default KnowledgeFeature;
