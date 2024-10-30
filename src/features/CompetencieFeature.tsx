import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { QRCodeSVG } from "qrcode.react";

interface Competency {
  title: string;
  percentage: number;
  color: string;
}

const competencies = [
  { title: "Стратегик фикрлаш", percentage: 85, color: "#22c55e" },
  { title: "Натижага йўналганлик", percentage: 75, color: "#22c55e" },
  { title: "Ўзгаришларни бошқариш", percentage: 33, color: "#ef4444" },
  { title: "Лидерлик", percentage: 100, color: "#2563eb" },
  { title: "Ўз-ўзини ривожлантириш", percentage: 98, color: "#22c55e" },
  { title: "Коммуника­тивлик", percentage: 45, color: "#f97316" },
];

const CompetencyChart: React.FC<{ data: Competency }> = ({ data }) => {
  const chartData = [
    { name: "Completed", value: data.percentage },
    { name: "Remaining", value: 100 - data.percentage },
  ];

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width={80} height={80}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={25}
            outerRadius={35}
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
      <span className="text-gray-800 font-semibold mt-2">{data.title}</span>
    </div>
  );
};

const CompetenciesSection = () => {
  return (
    <section className="container bg-white px-6 py-4">
      <div className="flex items-center mb-4">
        <div className="w-2 h-6 bg-blue-light mr-2"></div>
        <h2 className="text-2xl font-bold text-gray-light">
          Компетенцияларинг намоён бўлиши
        </h2>
        <div className="flex-1 ml-4 border-t border-2 border-gray-200"></div>
      </div>
      <div className="grid grid-cols-4 md:mt-8 mt-4 md:gap-4 gap-8">
        <div className="md:col-span-3 col-span-4">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
            {competencies.map((item, index) => (
              <CompetencyChart key={index} data={item} />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center col-span-4 md:col-span-1">
          <div style={{ width: "150px", height: "150px" }}>
            <QRCodeSVG value="https://argos.uz" width="100%" height="100%" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://argos.uz"
          target="_blank"
          className="text-gray-500  mt-8"
        >
          Argos.uz 2024
        </a>
      </div>
    </section>
  );
};

export default CompetenciesSection;
