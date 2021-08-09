import { HTMLAttributes, ReactNode } from 'react';

import { StyledTitle } from './styles';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  color?: string;
  detailColor?: string;
  size?: string;
  centered?: boolean;
  children: ReactNode;
}

function Title({
  color,
  size,
  centered,
  detailColor,
  children,
  ...props
}: TitleProps) {
  return (
    <StyledTitle
      color={color || `text-l11Body dark:text-l11GrayLight`}
      size={size || `text-xl`}
      centered={Number(!!centered)}
      detail={detailColor || `#A8FE75`}
      {...props}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;
