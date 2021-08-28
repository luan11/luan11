import { ComponentType, FunctionComponent, SVGProps } from 'react';

import { Container, Title, Subtitle } from './styles';

interface BoxProps {
  Icon: ComponentType | FunctionComponent<SVGProps<SVGSVGElement>>;
  iconSize?: [number, number];
  iconViewBox?: [number, number];
  title: string;
  subtitle: string;
}

function Box({ Icon, iconSize, iconViewBox, title, subtitle }: BoxProps) {
  const [iconWidth, iconHeight] = iconSize || [32, 32];
  const [iconViewBoxWidth, iconViewBoxHeight] = iconViewBox || [32, 32];

  return (
    <Container>
      <Icon
        viewBox={`0 0 ${iconViewBoxWidth} ${iconViewBoxHeight}`}
        width={iconWidth}
        height={iconHeight}
      />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

export default Box;
