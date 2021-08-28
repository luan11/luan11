import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const TwContainer = tw.div`
  rounded-lg
  dark:border-l11Body
  flex
  flex-col
  items-center
  cursor-pointer
  text-center
  relative
  overflow-hidden
`;

export const Container = styled(TwContainer)`
  padding: 18px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #19a6a5, #a8fe75);
    opacity: 0;
    transition: opacity 0.35s;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 2px solid #efefef;
    transition: border 0.35s;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    &::after {
      border-color: transparent;
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }

  > img {
    width: 32px;
    height: 32px;
  }
`;

export const Title = tw.h3`
  text-l11Body
  dark:text-l11GrayLight
  font-bold
  text-xl
  leading-tight
  my-2
`;

export const Subtitle = tw.h5`
  text-l11Gray
  dark:text-l11GrayLighten
  text-sm
  leading-tight
`;
