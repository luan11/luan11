import Header from './components/Header';
import DevelopmentSkills from './components/DevelopmentSkills';
import Studied from './components/Studied';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <DevelopmentSkills />
        <Studied />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
