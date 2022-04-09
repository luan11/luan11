import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const TwContainer = tw.div`
  rounded-lg
  flex
  flex-col
  items-center
  cursor-pointer
  text-center
  relative
  overflow-hidden
  shadow-md
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
    background: linear-gradient(to top, #75fe9f, #052762);
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
    background-color: #2c403e;
    border-radius: 0.5rem;
    border: 2px solid #485c5a;
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

  > svg {
    path {
      fill: #75fe9f;
    }
  }
`;

export const Title = tw.h3`
  text-white
  font-bold
  text-xl
  leading-tight
  my-2
`;

export const Subtitle = tw.h5`
  text-gray-200
  text-base
  leading-tight
`;
