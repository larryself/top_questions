import { createSlice } from '@reduxjs/toolkit';
import { questionApi } from './question';
import { IQuestion } from '../types/question';

type Props = {
  date: string,
  questions: IQuestion[],
}

const initialState: Props = {
  date: '2018-01-01',
  questions: [],
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setDate: (state, {payload}) => {
      state.date = payload;
    },
    setQuestions: (state, {payload}) => {
      const arr = [...state.questions];
      const value = arr[payload.hover];
      arr[payload.hover] = arr[payload.drag];
      arr[payload.drag] = value;
      console.log('prev', arr, arr);
      state.questions = arr;
    },
    setScore: (state, {payload}) => {
      const question = state.questions.find((question) => question.question_id === payload.question_id);
      if (question) {
        question.score = payload.score;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      questionApi.endpoints.getQuestion.matchFulfilled,
      (state, {payload}) => {
        state.questions = payload.items;
      },
    );
  },
});

export const reducer = rootSlice.reducer;
export const action = rootSlice.actions;