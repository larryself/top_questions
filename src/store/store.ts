import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { questionApi, reducer } from 'store';

const rootReducer = combineReducers({
  root: reducer,
  [questionApi.reducerPath]: questionApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(questionApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>
