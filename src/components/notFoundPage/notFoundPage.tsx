import React from "react";
import { Container, Title, Button } from "./style";
import { Wrapper } from "components";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
	return (
		<Wrapper>
			<Container>
				<Title>404</Title>
				<h2>Oops...</h2>
				<h3>Page not found</h3>
				<Link to={"/"}>
					<Button type={"button"}>Go home</Button>
				</Link>
			</Container>
		</Wrapper>
	);
};
