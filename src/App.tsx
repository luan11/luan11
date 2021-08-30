import Header from './components/Header';
import DevelopmentSkills from './components/DevelopmentSkills';
import Studied from './components/Studied';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Tip from './ui/components/Tip';

function App() {
  return (
    <>
      <Header />
      <main>
        <DevelopmentSkills />
        <Studied />
        <WorkExperience />
        <Contact />

        <div className="container mx-auto px-4 lg:px-0">
          <Tip
            title="⚠️ The content is updated sometimes"
            text="Last update has occurred at 2021-08-29. For recent updates, please contact me."
            width={[`w-3/4`, `w-3/4`, `w-full`]}
            type="WARNING"
          />
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
