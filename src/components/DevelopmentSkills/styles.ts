import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Wrapper = tw.section`
  lg:pt-12
  lg:pb-16
  pt-6
  pb-10
  bg-l11GrayLighten
`;

export const Container = tw.div`
  container
  mx-auto
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
  rounded-full
  flex
  justify-center
  items-center
  relative
  bg-white
  lg:mb-0
  mb-6
`;

export const Skill = styled(TwSkill)`
  width: 115px;
  height: 115px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 119px;
    height: 119px;
    background: linear-gradient(to top, #19a6a5, #a8fe75);
    border-radius: 9999px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 9999px;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  > svg {
    width: 80px;
    height: 80px;
    transition: transform 0.4s ease-in-out;
  }

  .popover {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    padding: 8px;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 90%;
    width: 135px;
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
      border-bottom: 8px solid rgba(0, 0, 0, 0.6);
    }

    > h6 {
      font-weight: 700;
      margin-bottom: 0.25rem;
      line-height: 115%;
      font-size: 0.875rem;
      cursor: text;
    }

    > p {
      font-size: 0.725rem;
      line-height: 100%;
      cursor: text;
    }
  }

  &:hover {
    > svg {
      transform: scale(0.9);
    }

    .popover {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
        z-index 0s;
      transform: translateY(0);
      opacity: 1;
      z-index: 1;
    }
  }
`;
