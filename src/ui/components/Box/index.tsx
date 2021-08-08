import { ComponentType } from 'react';

import { Container, Title, Subtitle } from './styles';

interface BoxProps {
  Icon: ComponentType;
  title: string;
  subtitle: string;
}

function Box({ Icon, title, subtitle }: BoxProps) {
  return (
    <Container>
      <Icon />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

export default Box;
