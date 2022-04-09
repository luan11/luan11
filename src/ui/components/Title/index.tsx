import { HTMLAttributes, ReactNode } from 'react';

import { StyledTitle } from './styles';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  color?: string;
  detailColor?: string;
  detailHeight?: number;
  size?: string;
  centered?: boolean;
  children: ReactNode;
}

function Title({
  color,
  size,
  centered,
  detailColor,
  detailHeight,
  children,
  ...props
}: TitleProps) {
  return (
    <StyledTitle
      color={color || `text-l11GrayLighten`}
      size={size || `text-2xl`}
      centered={Number(!!centered)}
      detail={detailColor || `#75fe9f`}
      $detailHeight={detailHeight ?? 4}
      {...props}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;
