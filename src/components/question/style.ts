import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  border-radius: 15px;
  border: 1px solid ${COLORS.WHITE};
  overflow: hidden;
`;

export const Box = styled.div<{ isAnswered: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.isAnswered ? '#b3efb6' : COLORS.MIDDLE_BLUE};
  padding: 25px 15px;
  color: ${props => props.isAnswered ? COLORS.DARK_BLUE : COLORS.LIGHT_BLUE};

  & p:last-child {
    color: ${props => !props.isAnswered && COLORS.WHITE};
  }
`;
//TODO add animation from detail
export const Detail = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  background-color: ${COLORS.LIGHT_BLUE};
  padding: 25px 15px;
  color: ${COLORS.DARK_BLUE};
`;

export const Title = styled.p`
  max-width: 70%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const Button = styled.button`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.LIGHT_BLUE};
  border-radius: 15px;
`;