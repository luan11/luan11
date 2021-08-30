import tw from 'tailwind-styled-components';
import { TIP_TYPES } from '../../../constants';

interface ContainerProps {
  $width: [string, string, string];
  $type: string;
  $onlyMobile: boolean;
}

export const Container = tw.div<ContainerProps>`
  text-center
  p-4
  my-4
  border-2
  rounded-lg
  mx-auto
  ${({ $width, $type, $onlyMobile }) => `
    lg:${$width[0]}
    sm:${$width[1]}
    ${$width[2]}
    ${
      $type === TIP_TYPES.INFO &&
      `
      bg-cyan-100
      border-cyan-200
      text-cyan-700
    `
    }
    ${
      $type === TIP_TYPES.ERROR &&
      `
      bg-red-100
      border-red-200
      text-red-700
    `
    }
    ${
      $type === TIP_TYPES.WARNING &&
      `
      bg-yellow-100
      border-yellow-200
      text-yellow-700
    `
    }
    ${
      $type === TIP_TYPES.SUCCESS &&
      `
      bg-green-100
      border-green-200
      text-green-700
    `
    }

    ${$onlyMobile && `lg:hidden`}
  `}
`;

export const Title = tw.h4`
  font-bold
  mb-2
  text-lg
`;

export const Text = tw.p`
  text-sm
`;
