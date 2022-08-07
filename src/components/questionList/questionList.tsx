import React, { useCallback, useEffect, useReducer } from "react";
import { useAction } from "store";
import { List } from "./style";
import { Question } from "components";
import { StackOverFlowQuestion } from "types/question";

type Props = {
	questions: StackOverFlowQuestion[];
};

type State = {
	openedQuestionId: number | null;
	selectQuestionId: number | null;
};

type Actions =
	| { type: "questionClick"; payload: { id: number } }
	| { type: "questionDBClick"; payload: { id: number } }
	| { type: "outsideClick" };

const initialState: State = {
	openedQuestionId: null,
	selectQuestionId: null,
};

function reducer(state: State, action: Actions) {
	switch (action.type) {
		case "questionClick":
			if (state.openedQuestionId === action.payload.id) {
				return { ...state, openedQuestionId: null };
			}
			return { ...state, openedQuestionId: action.payload.id };
		case "questionDBClick":
			if (state.selectQuestionId) {
				return { ...state, selectQuestionId: null };
			}
			return { ...state, selectQuestionId: action.payload.id };
		case "outsideClick":
			return { openedQuestionId: null, selectQuestionId: null };
		default:
			return state;
	}
}

export const QuestionList = ({ questions }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { swapQuestions } = useAction();
	const moveCard = useCallback(
		(dragIndex: number, dropIndex: number) => {
			swapQuestions({ dragIndex, dropIndex });
		},
		[swapQuestions]
	);

	const clickOutside = useCallback(() => {
		dispatch({ type: "outsideClick" });
	}, []);
	useEffect(() => {
		document.addEventListener("click", clickOutside);
		return () => {
			document.removeEventListener("click", clickOutside);
		};
	}, [clickOutside]);

	return (
		<List>
			{questions.map((question, index) => (
				<li key={question.question_id}>
					<Question
						question={question}
						index={index}
						moveCard={moveCard}
						selected={state.selectQuestionId === question.question_id}
						opened={state.openedQuestionId === question.question_id}
						onClick={(question) =>
							dispatch({
								type: "questionClick",
								payload: { id: question.question_id },
							})
						}
						onDBClick={(question) => {
							if (state.selectQuestionId) {
								swapQuestions({
									dragIndex: questions.findIndex(
										(q) => q.question_id === state.selectQuestionId
									),
									dropIndex: index,
								});
							}
							dispatch({
								type: "questionDBClick",
								payload: { id: question.question_id },
							});
						}}
					/>
				</li>
			))}
		</List>
	);
};
