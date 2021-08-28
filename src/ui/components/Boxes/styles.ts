import tw from 'tailwind-styled-components';
import styled from 'styled-components';

interface ContainerProps {
  cols: number;
}

const TwContainer = tw.div<ContainerProps>`
  mx-auto
  grid
  gap-6
  ${({ cols }) => `lg:grid-cols-${cols}`}
  grid-cols-1
`;

export const Container = styled(TwContainer)`
  width: 45%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
