import { ComponentType } from 'react';

function IconBr() {
  return <img src="assets/images/br.png" alt="Brazil" />;
}

function IconUs() {
  return <img src="assets/images/us.png" alt="United States" />;
}

type Language = {
  Icon: ComponentType;
  name: string;
  experience: string;
};

const languages: Language[] = [
  {
    Icon: IconBr,
    name: 'Brazilian Portuguese',
    experience: 'Native Speaker',
  },
  {
    Icon: IconUs,
    name: 'English',
    experience: 'Intermediate Proficiency',
  },
];

export default languages;
