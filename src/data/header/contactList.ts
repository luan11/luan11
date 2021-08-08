import { ComponentType } from 'react';
import { ReactComponent as IconEmail } from './assets/icons/ic24-email.svg';
import { ReactComponent as IconMap } from './assets/icons/ic24-map.svg';
import { ReactComponent as IconSuitcase } from './assets/icons/ic24-suitcase.svg';

type ListItem = {
  Icon: ComponentType;
  content: string;
  url?: string;
  target?: string;
  highlightedText?: string;
};

const contactList: ListItem[] = [
  {
    Icon: IconEmail,
    content: 'oi@luandev.ml',
    url: 'mailto:oi@luandev.ml',
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
