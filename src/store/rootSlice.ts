import { createSlice } from '@reduxjs/toolkit';
import { questionApi } from 'store';
import { IQuestion } from '../types/question';

type Props = {
  date: number,
  questions: IQuestion[],
}

const initialState: Props = {
  date: 1514764800, // it is '2018-01-01' in unix
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
      const value = arr[payload.dropIndex];
      arr[payload.dropIndex] = arr[payload.dragIndex];
      arr[payload.dragIndex] = value;
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
