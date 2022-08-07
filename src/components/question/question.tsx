import React, { MouseEvent, useRef } from "react";
import {
	Container,
	Detail,
	Box,
	Title,
	Score,
	Button,
	Author,
	Img,
	IconInner,
	Inner,
} from "./style";
import { useAction } from "store";
import { useDrag, useDrop } from "react-dnd";
import { Tags, Plus, Minus, Approved } from "components";
import { StackOverFlowQuestion } from "../../types/question";
import { useDoubleClick } from "@zattoo/use-double-click";

type Props = {
	question: StackOverFlowQuestion;
	index: number;
	moveCard: (dragIndex: number, dropIndex: number) => void;
	selected: boolean;
	opened: boolean;
	onClick: (question: StackOverFlowQuestion) => void;
	onDBClick: (question: StackOverFlowQuestion) => void;
};

type DragItem = {
	question_id: number;
	index: number;
};

export const Question = React.memo(
	({
		question,
		index,
		moveCard,
		selected,
		opened,
		onClick,
		onDBClick,
	}: Props) => {
		const { question_id, score, title, owner, view_count, is_answered, tags } =
			question;
		const { setScore } = useAction();
		const ref = useRef<HTMLDivElement>(null);
		const [, drop] = useDrop({
			accept: "question",
			collect: (monitor) => {
				return {
					handlerId: monitor.getHandlerId(),
				};
			},
			hover: (item: DragItem) => {
				if (!ref.current) {
					return;
				}
				const dragIndex = item.index;
				const dropIndex = index;
				if (dragIndex === dropIndex) {
					return;
				}
				moveCard(dragIndex, dropIndex);
				item.index = dropIndex;
			},
		});
		const [{ isDragging }, drag] = useDrag({
			type: "question",
			item: { question_id, index },
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		});

		const increment = (e: MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			setScore({ question_id, score: score + 1 });
		};
		const decrement = (e: MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			setScore({ question_id, score: score - 1 });
		};

		const hybridClick = useDoubleClick(
			() => {
				onDBClick(question);
			},
			() => {
				onClick(question);
			},
			{
				timeout: 250,
			}
		);
		drag(drop(ref));
		return (
			<>
				<Container
					onClick={(e) => {
						e.stopPropagation();
						hybridClick(e);
					}}
					ref={ref}
					isDragging={isDragging}
				>
					<Box isAnswered={is_answered} isActiveChoose={selected} ref={ref}>
						{is_answered ? (
							<IconInner>
								<Approved />
							</IconInner>
						) : null}
						<Title title={title} isOpen={opened}>
							{title}
						</Title>
						<Score>
							<p>{score}</p>
							<Button type={"button"} onClick={increment}>
								<Plus />
							</Button>
							<Button type={"button"} onClick={decrement}>
								<Minus />
							</Button>
						</Score>
					</Box>
					<Detail isOpen={opened}>
						<Inner>
							<Author>
								<p>
									Автор: <span>{owner.display_name}</span>
								</p>
								<a
									href={owner.link}
									target={"_blank"}
									rel="noreferrer"
									onClick={(e) => e.stopPropagation()}
								>
									<Img
										src={owner.profile_image}
										alt={owner.display_name}
										width={50}
										height={50}
									/>
								</a>
							</Author>
							<p>
								Рейтинг автора: <span>{owner.reputation}</span>
							</p>
							<p>
								Количество просмотров: <span>{view_count}</span>
							</p>
							<Tags tags={tags} />
						</Inner>
					</Detail>
				</Container>
			</>
		);
	}
);
