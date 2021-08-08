import { ComponentType } from 'react';
import { ReactComponent as IconBook } from './assets/icons/book.svg';

type Education = {
  Icon: ComponentType;
  course: string;
  about: string;
};

const education: Education[] = [
  {
    Icon: IconBook,
    course: 'Analysis and Software Development',
    about: 'Anhanguera University (2017 - 2019)',
  },
];

export default education;
