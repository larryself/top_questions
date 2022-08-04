import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { action } from 'store';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(action, dispatch);
};
