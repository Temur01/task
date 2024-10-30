import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

const PersonalSkills = () => {
  const radarData = {
    labels: ["Photoshop", "Premiere", "InDesign", "Illustrator", "XD"],
    datasets: [
      {
        label: "Skills",
        data: [80, 70, 85, 90, 75],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { display: false },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const progressData = [
    { label: "Мақсадга интилушчанлик", value: 90 },
    { label: "Эмоционал интеллект", value: 95 },
    { label: "Креативлик", value: 75 },
    { label: "Ходимларга йўналганлик", value: 86 },
    { label: "Топширикларга йўналганлик", value: 95 },
    { label: "Фаол ижтимоий муносабатлар", value: 75 },
    { label: "Ўз устида ишлаш", value: 86 },
    { label: "Муаммоли вазиятга йўналганлик", value: 86 },
  ];

  const firstHalf = progressData.slice(0, Math.ceil(progressData.length / 2));
  const secondHalf = progressData.slice(Math.ceil(progressData.length / 2));

  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center">
        <span className="w-2 h-6 bg-blue-600 mr-2"></span>
        Шахсий ва касбий хусусиятлар
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:space-x-1">
        <div className="flex-1 space-y-4 lg:mt-0">
          {firstHalf.map((item, index) => (
            <div key={index} className="my-4">
              <div className="flex justify-between mb-1">
                <p className="text-gray-light">{item.label}</p>
                <p className="text-gray-light font-semibold">{item.value}%</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-light h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 mt-4 lg:mt-0 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>

        <div className="flex-1 space-y-4 lg:mt-0">
          {secondHalf.map((item, index) => (
            <div key={index} className="my-4">
              <div className="flex justify-between mb-1">
                <p className="text-gray-light">{item.label}</p>
                <p className="text-gray-light font-semibold">{item.value}%</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-light h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalSkills;
