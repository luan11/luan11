import { ArrowUpCircleIcon } from 'lucide-react';

import { Title } from '@/ui/components/title';

const FooterComponent = () => (
  <footer className="py-14 flex justify-center">
    <button
      className="flex flex-col gap-3 text-lime-300 items-center transition-transform ease-linear hover:scale-75"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: `smooth`,
        })
      }
    >
      <ArrowUpCircleIcon size={36} />
      <Title className="text-lg uppercase text-lime-300">GO TO TOP</Title>
    </button>
  </footer>
);

export default FooterComponent;
