import React from 'react';
import { Title, Header, List } from './style';
import { Wrapper } from '../wrapper/wrapper';
import { questionApi, useGetQuestionQuery } from '../../store/question';
import DatePicker from 'react-datepicker';
import { useStore } from '../../store/useAppSelector';
import { Question } from '../question/question';

export const IndexPage = () => {
  const {date, questions} = useStore();
  const response = useGetQuestionQuery(date)
  console.log(questions[0]?.score)
  return (
    <Wrapper>
      <Header>
        <Title>
          5 самых популярных вопросов на <em>StackOverFlow</em>, содержащих <q>react-redux</q> в наименовании, начиная с
        </Title>
      </Header>
      <main>
        <List>
        {questions.map((question) => (
          <li key={question.question_id}>
            <Question {...question}/>
          </li>
        ))}
        </List>
      </main>
    </Wrapper>
  );
};
