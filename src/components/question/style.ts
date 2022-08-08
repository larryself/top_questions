import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div<{ isDragging: boolean }>`
	border-radius: 15px;
	border: 1px solid ${COLORS.WHITE};
	overflow: hidden;
	position: relative;
	opacity: ${(props) => (props.isDragging ? 0 : 1)};

	&:hover {
		box-shadow: 0 0 3px 3px rgba(255, 255, 255, 1);
	}
`;

export const Box = styled.div<{ isAnswered: boolean; isSelected: boolean }>`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	background-color: ${(props) =>
		props.isSelected
			? COLORS.DARK_RED
			: props.isAnswered
			? COLORS.LIGHT_GREEN
			: COLORS.MIDDLE_BLUE};
	padding: 25px 15px 25px 30px;
	color: ${COLORS.LIGHT_BLUE};
`;

export const Detail = styled.div<{ isOpen: boolean }>`
	transition: 0.2s all;
	height: 0;
	overflow: hidden;
	background-color: ${COLORS.LIGHT_BLUE};
	color: ${COLORS.DARK_BLUE};

	${(props) => props.isOpen && "height: 200px;"}
`;

export const Title = styled.p<{ isOpen: boolean }>`
	max-width: 70%;
	display: -webkit-box;
	overflow: hidden;
	${(props) => !props.isOpen && "	-webkit-line-clamp: 1;"}

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
		opacity: 0.7;
	}
`;

export const Author = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

export const Img = styled.img`
	top: 10px;
	right: 10px;
	border-radius: 5px;
	width: 50px;
	height: 50px;
`;

export const IconInner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 10px 15px;
	height: 100%;
`;

export const Link = styled.a<{ isAnswered: Boolean }>`
	color: ${(props) =>
		props.isAnswered ? COLORS.DARK_BLUE : COLORS.LIGHT_BLUE};
	&:hover {
		opacity: 0.7;
		text-decoration-line: underline;
	}
`;
