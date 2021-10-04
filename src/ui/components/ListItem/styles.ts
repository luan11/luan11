import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const Li = tw.li`
  flex
  items-center
  text-l11GrayLight
  mb-1
  text-md
  leading-snug
`;

export const Container = styled(Li)`
  &:last-child {
    margin-bottom: 0;
  }

  > svg {
    margin-right: 0.25rem;

    > path {
      fill: #06d6a0;
    }
  }

  a {
    transition: color 0.25s;

    &:hover {
      text-decoration: underline;
    }
  }

  > span {
    > a,
    > b {
      font-weight: 600;
      color: #06d6a0;
    }
  }
`;
