import React from "react";
import { GlobalStyle } from "./style";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { store } from "store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { NotFound } from "./pages/notFound";

export const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<DndProvider backend={HTML5Backend}>
					<GlobalStyle />
					<Routes>
						<Route path={"/"} element={<Index />} />
						<Route path={"*"} element={<NotFound />} />
					</Routes>
				</DndProvider>
			</Provider>
		</BrowserRouter>
	);
};
