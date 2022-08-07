import React, { ReactNode, FC } from "react";
import { Container } from "./style";

type Props = {
	children: ReactNode;
};

export const Wrapper: FC<Props> = ({ children }) => (
	<Container>{children}</Container>
);
