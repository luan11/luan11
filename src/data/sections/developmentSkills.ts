import { ComponentType } from 'react';
import { ReactComponent as IconHtml5 } from './assets/icons/html5.svg';
import { ReactComponent as IconCss3 } from './assets/icons/css3.svg';
import { ReactComponent as IconJavaScript } from './assets/icons/javascript.svg';
import { ReactComponent as IconTypeScript } from './assets/icons/typescript.svg';
import { ReactComponent as IconPhp } from './assets/icons/php.svg';
import { ReactComponent as IconReact } from './assets/icons/react.svg';
import { ReactComponent as IconWordPress } from './assets/icons/wordpress.svg';
import { ReactComponent as IconGit } from './assets/icons/git.svg';

type Skill = {
  Icon: ComponentType;
  name: string;
  experience: string;
  empty?: boolean;
};

const developmentSkills: Skill[] = [
  {
    Icon: IconHtml5,
    name: 'HTML5',
    experience: '+3 years',
  },
  {
    Icon: IconCss3,
    name: 'CSS3',
    experience: '+3 years',
  },
  {
    Icon: IconJavaScript,
    name: 'JavaScript',
    experience: '+3 years',
  },
  {
    Icon: IconTypeScript,
    name: 'TypeScript',
    experience: '1 year',
  },
  {
    Icon: IconPhp,
    name: 'PHP',
    experience: '+3 years',
  },
  {
    Icon: IconHtml5,
    name: '',
    experience: '',
    empty: true,
  },
  {
    Icon: IconReact,
    name: 'ReactJS',
    experience: '1 year',
  },
  {
    Icon: IconWordPress,
    name: 'WordPress',
    experience: '+3 years',
  },
  {
    Icon: IconGit,
    name: 'Git',
    experience: '+3 years',
  },
  {
    Icon: IconHtml5,
    name: '',
    experience: '',
    empty: true,
  },
];

export default developmentSkills;
