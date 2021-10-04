import tw from 'tailwind-styled-components';
import styled from 'styled-components';

import Title from '../../ui/components/Title';

export const Wrapper = tw.section`
  py-12
  bg-l11Gray
`;

export const Container = tw.div`
  container
  mx-auto
  lg:px-0
  px-4
`;

export const Worked = tw.ul`
  w-full
  lg:grid
  lg:grid-cols-2
  lg:gap-7
`;

export const Work = tw.li`
  lg:mb-0
  mb-7
  rounded
  p-4
  shadow-md
  bg-l11BodyBackground
`;

export const WorkTitle = styled(Title)`
  text-align: left;

  &:after {
    right: unset;
  }
`;

export const WorkInfoList = tw.ul`
  flex
  items-center
  mb-7
`;

const TwWorkInfoItem = tw.li`
  text-white
  font-medium
  flex
  items-center
  leading-tight
`;

export const WorkInfoItem = styled(TwWorkInfoItem)`
  &:first-child {
    margin-right: 1rem;
  }

  > svg {
    margin-right: 0.25rem;

    > path {
      fill: #06d6a0;
    }
  }
`;

export const WorkAbout = tw.p`
  text-white
  leading-tight
  text-base
`;
