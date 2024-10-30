import CompetenciesSection from "./features/CompetencieFeature";
import DiagnosticSection from "./features/DiagnosticFeature";
import Header from "./features/Header";
import KnowledgeFeature from "./features/KnowledgeFeature";
import PersonalCard from "./features/PersonalCard";
import PersonalSkills from "./features/PersonalSkill";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mt-8">
        <PersonalCard />
      </div>
      <div className="mt-8">
        <KnowledgeFeature />
      </div>
      <div className="mt-8">
        <PersonalSkills />
      </div>
      <div className="mt-8">
        <DiagnosticSection />
      </div>
      <div className="my-8">
        <CompetenciesSection />
      </div>
    </div>
  );
};

export default App;
