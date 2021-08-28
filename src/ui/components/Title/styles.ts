import tw from 'tailwind-styled-components';
import styled from 'styled-components';

interface TwTitleProps {
  color: string;
  detail: string;
  size: string;
  centered: number;
}

const TwTitle = tw.h2<TwTitleProps>`
  relative
  pb-2
  mb-4
  uppercase
  font-bold
  tracking-widest
  ${({ size, centered, color }) =>
    `${size} ${centered ? `text-center` : ``} ${color}`}
`;

export const StyledTitle = styled(TwTitle)`
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 auto;
    height: 4px;
    width: 75px;
    background-color: ${({ detail }) => detail};
    ${({ centered }) => (centered ? `right: 0;` : ``)}
  }

  @media (max-width: 1023px) {
    text-align: center;

    &::after {
      right: 0;
    }
  }
`;
