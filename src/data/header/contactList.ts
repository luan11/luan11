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
    iconSize: [20, 20],
    content: 'hello@luancode.dev.br',
    url: 'mailto:hello@luancode.dev.br',
  },
  {
    Icon: IconMap,
    iconSize: [20, 20],
    content: 'Guarulhos - SP / Brazil',
  },
  {
    Icon: IconSuitcase,
    iconSize: [20, 20],
    content: 'Working on @Segware',
    url: 'https://segware.com/',
    target: '_blank',
    highlightedText: '@Segware',
  },
];

export default contactList;
