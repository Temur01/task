import useTheme from './hooks/useTheme';
import Header from './components/Header';
import CompetenciesSection from './sections/CompetencieFeature';
import DiagnosticSection from './sections/DiagnosticFeature';
import KnowledgeFeature from './sections/KnowledgeFeature';
import PersonalCard from './sections/PersonalCard';
import PersonalSkills from './sections/PersonalSkill';

const App = () => {
  const { theme } = useTheme(); 

  return (
    <div className={theme === 'dark' ? 'bg-dark-gray-light' : 'bg-white'}>
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
      <div className="mt-8">
        <CompetenciesSection />
      </div>
    </div>
  );
};

export default App;
