import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questionApi } from "store";
import { StackOverFlowQuestion } from "../types/question";

type Props = {
	questions: StackOverFlowQuestion[];
};

const initialState: Props = {
	questions: [],
};

export const rootSlice = createSlice({
	name: "root",
	initialState,
	reducers: {
		swapQuestions: (
			state,
			{ payload }: PayloadAction<{ dragIndex: number; dropIndex: number }>
		) => {
			const arr = [...state.questions];
			const value = arr[payload.dropIndex];
			arr[payload.dropIndex] = arr[payload.dragIndex];
			arr[payload.dragIndex] = value;
			state.questions = arr;
		},
		setScore: (
			state,
			{ payload }: PayloadAction<{ question_id: number; score: number }>
		) => {
			const question = state.questions.find(
				(question) => question.question_id === payload.question_id
			);
			if (question) {
				question.score = payload.score;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			questionApi.endpoints.getQuestion.matchFulfilled,
			(state, { payload }) => {
				state.questions = payload.items;
			}
		);
	},
});

export const reducer = rootSlice.reducer;
export const action = rootSlice.actions;
