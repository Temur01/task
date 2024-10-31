import CompetenciesSection from "./sections/CompetencieFeature";
import DiagnosticSection from "./sections/DiagnosticFeature";
import Header from "./components/Header";
import KnowledgeFeature from "./sections/KnowledgeFeature";
import PersonalCard from "./sections/PersonalCard";
import PersonalSkills from "./sections/PersonalSkill";

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
