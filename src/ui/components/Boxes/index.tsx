import { ComponentType } from 'react';
import Box from './../Box';

import { Container } from './styles';

type BoxProps = {
  Icon: ComponentType;
  title: string;
  subtitle: string;
};

interface BoxesProps {
  items: BoxProps[];
  gridColumns?: number;
}

function Boxes({ items, gridColumns }: BoxesProps) {
  return (
    <Container cols={gridColumns || 1}>
      {items.map((item, index) => (
        <Box key={index} {...item} />
      ))}
    </Container>
  );
}

export default Boxes;
