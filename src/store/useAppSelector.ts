import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypeRootState } from '../store/store';
import { createSelector } from '@reduxjs/toolkit';

export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;

const selector = createSelector((state: TypeRootState) => state.root, (root) => root)

export const useStore = () => {
  const store = useAppSelector(selector);
  return store;
}

