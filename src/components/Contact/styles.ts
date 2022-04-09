import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Wrapper = tw.section`
  py-12
  bg-l11Body
`;

export const Container = tw.div`
  container
  mx-auto
  lg:px-0
  px-4
`;

export const List = tw.ul`
  flex
  align-center
  justify-center
`;

export const TwListItem = tw.li`
  mr-4
`;

export const ListItem = styled(TwListItem)`
  &:last-child {
    margin-right: 0;
  }

  svg {
    path {
      fill: #fafafa;
      transition: fill 0.35s ease;
    }
  }

  &:hover {
    svg {
      path {
        fill: #75fe9f;
      }
    }
  }
`;
