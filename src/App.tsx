import ReactGA from 'react-ga4';

import { Header } from '@/components/Header';
import { Home } from '@/pages/Home';
import { Main } from '@/ui/components/main';
import { Footer } from './components/Footer';

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
ReactGA.send('pageview');

function App() {
  return (
    <div className="bg-zinc-900 flex flex-col gap-8 w-full min-h-[100dvh] py-6 px-4 2xl:px-0">
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
