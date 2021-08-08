import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Wrapper = tw.header`
  border-t-8
  border-l11AquaGreen
  lg:py-12
  py-6
`;

export const Container = tw.div`
  container
  mx-auto
  lg:px-0
  px-4
  grid
  lg:grid-cols-2
  grid-cols-1
  gap-7
  items-center
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
  lg:mr-7
  lg:ml-0
  mx-auto
`;

export const Data = styled.div`
  width: calc(100% - 224px - 28px);

  @media (max-width: 1023px) {
    width: 100%;
    text-align: center;
  }
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

const TwAboutWrapper = tw.div`
  text-l11Gray
  leading-snug
  text-base
`;

export const AboutWrapper = styled(TwAboutWrapper)`
  p {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 1023px) {
      text-align: center;
    }
  }
`;
