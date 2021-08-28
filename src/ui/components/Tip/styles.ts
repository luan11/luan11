import tw from 'tailwind-styled-components';
import { TIP_COLORS } from '../../../constants';

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
    bg-${TIP_COLORS[$type]}-100
    border-${TIP_COLORS[$type]}-200
    text-${TIP_COLORS[$type]}-700

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
