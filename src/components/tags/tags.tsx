import React from 'react';
import { Container, List, Item, Tag } from './style';

interface Props {
  tags: string[];
}

export const Tags = ({tags}: Props) => {
  return (
    <Container>
      <p>Теги:</p>
      <List>
        {tags.map((tag) => (
          <Item key={tag}>
            <Tag>{tag}</Tag>
          </Item>
        ))}
      </List>
    </Container>
  );
};
