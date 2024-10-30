import { QRCodeSVG } from "qrcode.react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; 

const competencies = [
  { title: "Стратегик фикрлаш", percentage: 85, color: "#22c55e" },
  { title: "Натижага йўналганлик", percentage: 75, color: "#22c55e" },
  { title: "Ўзгаришларни бошқариш", percentage: 33, color: "#ef4444" },
  { title: "Лидерлик", percentage: 100, color: "#2563eb" },
  { title: "Ўз-ўзини ривожлантириш", percentage: 98, color: "#22c55e" },
  { title: "Коммуника­тивлик", percentage: 45, color: "#f97316" },
];

const CompetenciesSection = () => {
  return (
    <section>
      <div className="flex items-center mb-4">
        <div className="w-2 h-6 bg-blue-600 mr-2"></div>
        <h2 className="text-2xl font-bold text-gray-900">Компетенцияларинг намоён бўлиши</h2>
      </div>
      <div className="flex flex-col gap-5 md:justify-between justify-center md:flex-row items-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {competencies.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div >
                <CircularProgressbar
                     value={item.percentage}
                      text={`${item.percentage}%`}
                      styles={{
                        ...buildStyles({
                          pathColor: item.color,
                          textColor: "#333",
                          trailColor: "#d1d5db",
                          
                        }),
                        root: {
                          width: '70px', 
                          height: '70px', 
                        },
                      }}
                />
              </div>
              <span className="text-gray-800 font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <QRCodeSVG value="https://argos.uz" width="100%" height="100%" />
        </div>
      </div>
      <p className="text-gray-500 text-center mt-4">Argos.uz 2024</p>
    </section>
  );
};

export default CompetenciesSection;
