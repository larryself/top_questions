import React, { ReactNode, FC } from 'react';
import { Container } from './style';

interface Props {
  children: ReactNode,
}

export const Wrapper: FC<Props> = ({children}) => (
  <Container>
    {children}
  </Container>
);
