import { FunctionComponent, SVGProps } from 'react';
import ListItem from './../ListItem';

import { Container } from './styles';

type ListItemProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  iconSize?: [number, number];
  iconViewBox?: [number, number];
  content: string;
  url?: string;
  target?: string;
  highlightedText?: string;
};

interface ListProps {
  items: ListItemProps[];
}

function List({ items }: ListProps) {
  return (
    <Container>
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </Container>
  );
}

export default List;
