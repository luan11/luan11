import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Wrapper = tw.section`
  lg:pt-12
  lg:pb-16
  pt-6
  pb-10
  bg-l11BodyBackground
  dark:bg-l11Body
`;

export const Container = tw.div`
  container
  mx-auto
  lg:px-0
  px-4
`;

const TwSkills = tw.ul`
  list-none
  pl-0
  lg:grid
  block
  lg:grid-cols-5
  gap-6
  mx-auto
  items-center
`;

export const Skills = styled(TwSkills)`
  width: 55%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const TwSkill = tw.li`
  mx-auto
  rounded
  flex
  justify-center
  items-center
  relative
  bg-l11Body
  lg:mb-0
  mb-6
  shadow-2xl
`;

export const Skill = styled(TwSkill)`
  width: 125px;
  height: 125px;
  cursor: pointer;

  > * {
    position: relative;
    z-index: 1;
  }

  > svg {
    transition: transform 0.4s ease-in-out;
  }

  .popover {
    background-color: rgba(26, 26, 26, 0.75);
    border-radius: 0.25rem;
    padding: 8px;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 90%;
    width: 150px;
    transform: translateY(-25%);
    opacity: 0;
    z-index: -1;
    cursor: default;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
      z-index 0s 0.3s;

    &::after {
      content: '';
      position: absolute;
      top: -8px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid rgba(26, 26, 26, 0.75);
    }

    > h6 {
      font-weight: 700;
      margin-bottom: 0.25rem;
      line-height: 115%;
      font-size: 1rem;
      cursor: text;
    }

    > p {
      font-size: 0.85rem;
      line-height: 100%;
      cursor: text;
    }
  }

  &:hover {
    > svg {
      transform: scale(1.1);
    }

    .popover {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
        z-index 0s;
      transform: translateY(0);
      opacity: 1;
      z-index: 2;
    }
  }
`;
