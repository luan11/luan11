import {
  ExternalLinkIcon,
  HammerIcon,
  LinkIcon,
  MenuIcon,
  MessageCircleIcon,
  XIcon,
} from 'lucide-react';
import { MouseEvent, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { Button } from '@/ui/components/button';
import { Link } from '@/ui/components/link';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((current) => !current);

  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setIsOpen(false);
  };

  return (
    <header className="container mx-auto flex justify-between items-center relative">
      <div className="text-stone-100 relative w-[112px]">
        <Logo width="100%" height="100%" />
      </div>

      <button className="lg:hidden text-stone-100" onClick={onToggle}>
        <MenuIcon size={42} />
      </button>

      <div
        className={twMerge(
          `fixed lg:relative top-0 right-0 w-full lg:w-auto h-full lg:h-auto -z-10 bg-zinc-900/80 lg:bg-unset flex lg:block justify-between items-start opacity-0 transition-opacity ease-linear`,
          isOpen && `z-10`,
          isOpen && `opacity-1`
        )}
        onClick={onToggle}
      >
        <button
          className="lg:hidden text-stone-100 ml-4 mt-6"
          onClick={onClose}
        >
          <XIcon size={42} />
        </button>

        <nav
          className={twMerge(
            `flex items-center gap-3 flex-col lg:flex-row sm:w-3/5 w-3/4 lg:w-auto bg-zinc-900 lg:bg-transparent py-6 px-4 lg:p-0 h-full lg:h-auto shadow lg:shadow-none transition-transform ease-linear translate-x-full lg:translate-x-0`,
            isOpen && `translate-x-0`
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            className="!text-zinc-600 cursor-not-allowed"
            title="Coming soon..."
          >
            <LinkIcon size={16} />
            <span>Link Tree</span>
          </Link>

          <Link href="https://tools.luancode.dev.br/" target="_blank">
            <HammerIcon size={16} />
            <span>Tools</span>
          </Link>

          <Link href="mailto:hello@luancode.dev.br">
            <MessageCircleIcon size={16} />
            <span>Contact</span>
          </Link>

          <Button
            className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-stone-100 disabled:text-zinc-600 disabled:border-zinc-600 disabled:bg-transparent disabled:cursor-not-allowed"
            disabled
            title="Coming soon..."
          >
            <ExternalLinkIcon size={16} />
            <span>CHECK OUT MY EBOOK NOW</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
