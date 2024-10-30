import CompetenciesSection from "./features/CompetencieFeature";
import DiagnosticSection from "./features/DiagnosticFeature";
import Header from "./features/Header";
import PersonalCard from "./features/PersonalCard";
import PersonalSkills from "./features/PersonalSkill";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mt-10">
        <PersonalCard />
        <div className="mt-10">
          <PersonalSkills />
        </div>
      </div>
      
      <div className="mt-10">
        <DiagnosticSection />
      </div>
     
       <div className="mt-10">
        <CompetenciesSection />
      </div>
    </div>
  );
};

export default App;
