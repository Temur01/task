import CompetenciesSection from "./features/CompetencieFeature";
import DiagnosticSection from "./features/DiagnosticFeature";
import Header from "./features/Header";
import PersonalCard from "./features/PersonalCard";
import PersonalSkills from "./features/PersonalSkill";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mt-6">
        <PersonalCard />
      </div>
      <div className="mt-6">
        <PersonalSkills />
      </div>
      <div className="mt-6">
        <DiagnosticSection />
      </div>
      <div className="my-6">
        <CompetenciesSection />
      </div>
    </div>
  );
};

export default App;
