import {
  ExternalLinkIcon,
  HammerIcon,
  LinkIcon,
  MessageCircleIcon,
} from 'lucide-react';

import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { Button } from '@/ui/components/button';
import { Link } from '@/ui/components/link';

const HeaderComponent = () => (
  <header className="container mx-auto flex justify-between items-center">
    <div className="text-stone-100 relative w-[112px]">
      <Logo width="100%" height="auto" />
    </div>

    <nav className="flex items-center gap-3">
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
  </header>
);

export default HeaderComponent;
