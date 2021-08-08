import { ComponentType } from 'react';
import ListItem from './../ListItem';

import { Container } from './styles';

type ListItemProps = {
  Icon: ComponentType;
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
