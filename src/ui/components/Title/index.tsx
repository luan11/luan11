import { ReactNode } from 'react';

import { StyledTitle } from './styles';

interface TitleProps {
  color?: string;
  detailColor?: string;
  size?: string;
  centered?: boolean;
  children: ReactNode;
}

function Title({ color, size, centered, detailColor, children }: TitleProps) {
  return (
    <StyledTitle
      color={color || `text-l11Body`}
      size={size || `text-xl`}
      centered={centered}
      detail={detailColor || `#A8FE75`}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;
