import { FunctionComponent, SVGProps } from 'react';
import { ReactComponent as IconEmail } from './assets/icons/email.svg';
import { ReactComponent as IconMap } from './assets/icons/map.svg';
import { ReactComponent as IconSuitcase } from './assets/icons/suitcase.svg';

type ListItem = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  iconSize?: [number, number];
  iconViewBox?: [number, number];
  content: string;
  url?: string;
  target?: string;
  highlightedText?: string;
};

const contactList: ListItem[] = [
  {
    Icon: IconEmail,
    content: 'oi@luancode.dev.br',
    url: 'mailto:oi@luancode.dev.br',
  },
  {
    Icon: IconMap,
    content: 'Guarulhos - SP / Brazil',
  },
  {
    Icon: IconSuitcase,
    content: 'Working on @Segware',
    url: 'https://segware.com/',
    target: '_blank',
    highlightedText: '@Segware',
  },
];

export default contactList;
