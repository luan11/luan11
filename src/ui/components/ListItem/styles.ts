import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const Li = tw.li`
  flex
  items-center
  text-l11Body
  mb-1
  text-sm
  leading-snug
`;

export const Container = styled(Li)`
  &:last-child {
    margin-bottom: 0;
  }

  > svg {
    margin-right: 0.25rem;
    width: 1rem;
    height: 1rem;

    > path {
      fill: #19a6a5;
    }
  }

  a {
    transition: color 0.25s;

    &:hover {
      color: #19a6a5;
      text-decoration: underline;
    }
  }

  > span {
    > a,
    > b {
      font-weight: 600;
      color: #19a6a5;
    }
  }
`;
