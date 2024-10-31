import { QRCodeSVG } from "qrcode.react";
import { competencies } from "../data/data";
import TopOfSection from "../components/TopOfSection";
import CompetencyChart from "../components/charts/CompetencyChart";

const CompetenciesSection = () => {
  return (
    <section className="container bg-white px-6 py-4">
      <TopOfSection title="Компетенцияларинг намоён бўлиши" />
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
          className="text-gray-text mt-8"
        >
          Argos.uz 2024
        </a>
      </div>
    </section>
  );
};

export default CompetenciesSection;
