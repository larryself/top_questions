import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
export const Title = styled.h1`
  font-size: 10rem;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${COLORS.WHITE};
  
  &:hover {
    opacity: .7;
  }
`;
