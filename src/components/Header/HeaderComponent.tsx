import { HammerIcon, LinkIcon, MessageCircleIcon } from 'lucide-react';

import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { Link } from '@/ui/components/link';

const HeaderComponent = () => (
  <header className="container mx-auto flex justify-between items-center">
    <div className="text-stone-100 relative w-[112px]">
      <Logo width="100%" height="auto" />
    </div>

    <nav className="flex items-center gap-3">
      <Link href="#" target="_blank">
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
    </nav>
  </header>
);

export default HeaderComponent;
