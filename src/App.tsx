import Header from './components/Header';
import DevelopmentSkills from './components/DevelopmentSkills';
import Studied from './components/Studied';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <DevelopmentSkills />
        <Studied />
        <WorkExperience />
        <Footer />
      </main>
    </>
  );
}

export default App;
