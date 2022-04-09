import { FunctionComponent, SVGProps } from 'react';
import { ReactComponent as IconHtml5 } from './assets/icons/html5.svg';
import { ReactComponent as IconCss3 } from './assets/icons/css3.svg';
import { ReactComponent as IconJavaScript } from './assets/icons/javascript.svg';
import { ReactComponent as IconTypeScript } from './assets/icons/typescript.svg';
import { ReactComponent as IconPhp } from './assets/icons/php.svg';
import { ReactComponent as IconReact } from './assets/icons/react.svg';
import { ReactComponent as IconWordPress } from './assets/icons/wordpress.svg';
import { ReactComponent as IconGit } from './assets/icons/git.svg';
import { ReactComponent as IconSass } from './assets/icons/sass.svg';
import { ReactComponent as IconNodeJS } from './assets/icons/nodejs.svg';
import { ReactComponent as IconTestingLibrary } from './assets/icons/testinglibrary.svg';

type Skill = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  iconSize?: [number, number];
  iconViewBox?: [number, number];
  name: string;
  experience: string;
  empty?: boolean;
};

const developmentSkills: Skill[] = [
  {
    Icon: IconHtml5,
    name: 'HTML5',
    experience: '+4 years',
  },
  {
    Icon: IconCss3,
    name: 'CSS3',
    experience: '+4 years',
  },
  {
    Icon: IconJavaScript,
    name: 'JavaScript',
    experience: '+4 years',
  },
  {
    Icon: IconTypeScript,
    name: 'TypeScript',
    experience: '2 years',
  },
  {
    Icon: IconReact,
    name: 'ReactJS',
    experience: '2 years',
  },
  {
    Icon: IconNodeJS,
    name: 'Node.js',
    experience:
      '+4 years, biggest usage is about configuring bundlers and development of simple APIs for learning',
    iconViewBox: [45, 50],
  },
  {
    Icon: IconSass,
    name: 'Sass',
    experience: '+3 years',
    iconViewBox: [45, 50],
  },
  {
    Icon: IconPhp,
    name: 'PHP',
    experience: '+4 years',
  },
  {
    Icon: IconWordPress,
    name: 'WordPress',
    experience: '+4 years',
  },
  {
    Icon: IconGit,
    name: 'Git',
    experience: '+4 years',
  },
  {
    Icon: IconTestingLibrary,
    iconViewBox: [24, 24],
    name: 'Testing Library',
    experience: '1 year',
  },
];

export default developmentSkills;
