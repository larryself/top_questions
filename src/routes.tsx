import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { NotFound } from './pages/notFound';
import { Index } from './pages/index';

export const AppRoute = () => {
  return (
      <Routes>
        <Route path={'/'} element={<Index/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
  );
};

