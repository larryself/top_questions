import React from 'react';
import { GlobalStyle } from './style';
import { Index } from './pages';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle/>
        <Index/>
      </DndProvider>
    </Provider>
  );
};
