import React from "react";
import { GlobalStyle } from "./style";
import { AppRoute } from "./routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { store } from "store";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<DndProvider backend={HTML5Backend}>
					<GlobalStyle />
					<AppRoute />
				</DndProvider>
			</Provider>
		</BrowserRouter>
	);
};
