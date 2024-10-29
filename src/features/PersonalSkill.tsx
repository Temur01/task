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
        data: [60, 70, 85, 90, 75],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const radarOptions = {
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
        <div className="flex-1 space-y-4">
          {firstHalf.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <p className="text-gray-800 w-1/2">{item.label}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <p className="text-gray-800 font-semibold">{item.value}%</p>
            </div>
          ))}
        </div>

        <div className="flex-1 mt-4 lg:mt-0 flex justify-center">
          <Radar data={radarData} options={radarOptions} className="w-full max-w-md" />
        </div>

        <div className="flex-1 space-y-4 lg:mt-0">
          {secondHalf.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <p className="text-gray-800 w-1/2">{item.label}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <p className="text-gray-800 font-semibold">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalSkills;
