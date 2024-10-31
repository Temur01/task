import { Radar } from "react-chartjs-2";
import { progressData } from "../data/data";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import TopOfSection from "../shared/TopOfSection";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

const PersonalSkills = () => {
  const radarData = {
    labels: ["Photoshop", "Illustrator", "XD", "Premiere", "InDesign"],
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

  const firstHalf = progressData.slice(0, Math.ceil(progressData.length / 2));
  const secondHalf = progressData.slice(Math.ceil(progressData.length / 2));

  return (
    <div className="bg-white px-6 container">
      <TopOfSection title="Шахсий ва касбий хусусиятлар" />
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:space-x-1">
        <div className="flex-1 space-y-4 w-full lg:mt-0">
          {firstHalf.map((item, index) => (
            <div key={index} className="my-4">
              <div className="flex justify-between mb-1">
                <p className="text-gray-light">{item.label}</p>
                <p className="text-gray-light font-semibold">{item.value}%</p>
              </div>

              <div className="w-full bg-slate-light rounded-full h-2">
                <div
                  className="bg-blue-light h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 mt-4 lg:mt-0 flex justify-center">
          <div
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            style={{ width: "400px", height: "300px" }}
          >
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>

        <div className="flex-1 space-y-4 lg:mt-0 w-full">
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
