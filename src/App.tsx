import { Header } from '@/components/Header';
import { Home } from '@/pages/Home';
import { Main } from '@/ui/components/main';

function App() {
  return (
    <div className="bg-zinc-900 flex flex-col gap-8 w-full min-h-[100dvh] py-6">
      <Header />
      <Main>
        <Home />
      </Main>
    </div>
  );
}

export default App;
