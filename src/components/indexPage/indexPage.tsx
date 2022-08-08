import React from "react";
import { Title, Container, Inner } from "./style";
import { Wrapper, DateControl, Error, Loader, QuestionList } from "components";
import { useStore, useGetQuestionQuery } from "store";
import { useSearchParams } from "react-router-dom";
import parseDate from "date-fns/parse";
import { format } from "date-fns";
import isValidDate from "date-fns/isValid";

const dateFormat = "dd.MM.yyyy";

const parseDateFromQueryString = (date: string | null): Date | null => {
	if (!date) return null;
	const parsed = parseDate(date, dateFormat, new Date());
	return isValidDate(parsed) ? parsed : null;
};

export const IndexPage = () => {
	const initialDate = new Date("01.01.2018");
	const { questions } = useStore();
	const [searchParams, setSearchParams] = useSearchParams();
	const dateInQuery: string | null = searchParams.get("date");
	const parsedDateInQuery = parseDateFromQueryString(dateInQuery);
	const date = parsedDateInQuery ?? initialDate;
	const response = useGetQuestionQuery(date.getTime());

	const handleDate = (value: Date) => {
		setSearchParams({ date: format(value, dateFormat) });
	};
	return (
		<>
			<header>
				<Wrapper>
					<Container>
						<Title>
							5 самых популярных вопросов на <em>StackOverFlow</em>, содержащих{" "}
							<q>react-redux</q> в наименовании, начиная с
						</Title>
						<DateControl
							date={date}
							setDate={handleDate}
							minDate={initialDate}
							dateFormat={dateFormat}
						/>
					</Container>
				</Wrapper>
			</header>
			<main>
				<Wrapper>
					<Inner>
						{!response.error && <QuestionList questions={questions} />}
						{response.isFetching && <Loader />}
						{response.error && <Error />}
					</Inner>
				</Wrapper>
			</main>
		</>
	);
};
