import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Wrapper = tw.header`
  border-t-8
  border-l11AquaGreen
  py-12
`;

export const Container = tw.div`
  container
  mx-auto
  grid
  grid-cols-2
  gap-7
`;

export const DataWrapper = tw.div`
  flex
  flex-wrap
  items-center
`;

export const Picture = tw.img`
  rounded-full
  w-56
  h-56
  border-4
  border-l11LightGreen
  shadow-l11Soft
  object-cover
  mr-7
`;

export const Data = styled.div`
  width: calc(100% - 224px - 28px);
`;

const TwName = tw.h1`
  text-l11Body
  font-bold
  leading-tight
`;

export const Name = styled(TwName)`
  font-size: 2.625rem;
`;

export const Role = tw.h4`
  text-l11Gray
  text-xl
  leading-tight
  mb-2
`;
