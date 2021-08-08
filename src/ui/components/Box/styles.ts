import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const TwContainer = tw.div`
  p-4
  rounded-lg
  border-2
  border-l11GrayLight
  flex
  flex-col
  items-center
  cursor-pointer
  transition
  hover:border-l11LightGreen
  text-center
`;

export const Container = styled(TwContainer)`
  > img,
  > svg {
    width: 32px;
    height: 32px;
    cursor: default;
  }
`;

export const Title = tw.h3`
  text-l11Body
  font-bold
  text-xl
  leading-tight
  my-2
  cursor-text
`;

export const Subtitle = tw.h5`
  text-l11Gray
  text-sm
  leading-tight
  cursor-text
`;
