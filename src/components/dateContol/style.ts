import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../constants/colors";

export const DatePickerStyles = createGlobalStyle`
  .react-date-picker{
    background: ${COLORS.WHITE};
    padding: 10px 15px;
    color: ${COLORS.BLACK};
    border-radius: 10px;
  }
  .react-date-picker__wrapper {
    border: 0;
  }
`;

export const Button = styled.button`
	position: absolute;
	right: -10px;
	transform: translateX(100%);
	background-color: ${COLORS.WHITE};
	padding: 10px 15px;
	border-radius: 10px;
	height: 100%;
	&:hover {
		opacity: 0.7;
	}
`;

export const Container = styled.div`
	position: relative;
	display: flex;
	gap: 15px;
`;
