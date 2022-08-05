import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div<{ isActiveChoose: boolean }>`
  border-radius: 15px;
  border: 1px solid ${COLORS.WHITE};
  overflow: hidden;
  position: relative;
  
  &:hover {
    box-shadow: 0 0 3px 3px rgba(255, 255, 255, 1);
  }
`;

export const Box = styled.div<{ isAnswered: boolean, isActiveChoose: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.isActiveChoose ? COLORS.DARK_RED : props.isAnswered ? COLORS.LIGHT_GREEN : COLORS.MIDDLE_BLUE};
  padding: 25px 15px 25px 30px;
  color: ${props => props.isAnswered ? COLORS.DARK_BLUE : COLORS.LIGHT_BLUE};
`;

export const Detail = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  transition: .5s;
  flex-direction: column;
  gap: 10px;
  height: 0;
  overflow: hidden;
  padding: 25px 15px;
  background-color: ${COLORS.LIGHT_BLUE};
  color: ${COLORS.DARK_BLUE};
  position: relative;
  ${props => props.isOpen && 'height: 100%;'}
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.LIGHT_BLUE};
  border-radius: 15px;

  &:hover {
    opacity: .7;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const Img = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 5px;
`;

export const IconInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
