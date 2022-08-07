import styled from "styled-components";
import { COLORS } from "constants/colors";

export const AnimationBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Animation = styled.span`
	width: 63px;
	height: 63px;
	border-radius: 50%;
	background: radial-gradient(farthest-side, ${COLORS.WHITE} 94%, #0000)
			top/11px 11px no-repeat,
		conic-gradient(#0000 0%, ${COLORS.WHITE});
	-webkit-mask: radial-gradient(
		farthest-side,
		#0000 calc(100% - 11px),
		${COLORS.BLACK} 0
	);
	animation: spinner-c7wet2 1.2s infinite linear;
	@keyframes spinner-c7wet2 {
		100% {
			transform: rotate(1turn);
		}
	}
`;
