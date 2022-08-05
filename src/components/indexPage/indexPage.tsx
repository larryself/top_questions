import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Title, Container, List } from './style';
import { Wrapper, DateControl, Question, Error } from 'components';
import { useStore,useAction,useGetQuestionQuery } from 'store';
import { useSearchParams } from 'react-router-dom';

export const IndexPage = () => {
  const {initialDate, questions} = useStore();
  const ref = useRef<HTMLUListElement>(null);
  const [searchParams] = useSearchParams();
  const dateInQuery = Number(searchParams.get('date'));
  const date = dateInQuery || initialDate
  const response = useGetQuestionQuery(date);
  const {setQuestions} = useAction();
  const [isChose, setIsChose] = useState<{ id: number, index: number}[]>([]);
  const dbClick = ({id, index}: {id: number, index: number}) => {
    const find = isChose.find((item) => item.id === id);
    if (find) {
      setIsChose([])
    } else {
      setIsChose((prev) => [...prev, {id, index}]);
    }
  };
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsChose([]);
    }
  }
  const moveCard = useCallback((dragIndex: number, dropIndex: number) => {
    setQuestions({dragIndex, dropIndex});
  }, []);

  useEffect(() => {
    if (isChose.length === 1) {
      document.addEventListener('dblclick',handleClick);
    }
    return () => {
      document.removeEventListener('dblclick', handleClick);
    };
  }, [isChose]);

  useEffect(()=> {
    if (isChose.length === 2) {
      setQuestions({dragIndex: isChose[0].index, dropIndex: isChose[1].index});
      setIsChose([])
    }
  },[isChose])
  return (
    <>
      <header>
        <Wrapper>
          <Container>
            <Title>
              5 самых популярных вопросов на <em>StackOverFlow</em>, содержащих <q>react-redux</q> в наименовании,
              начиная с
            </Title>
            <DateControl date={date}/>
          </Container>
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          {!response.error && (
            <List ref={ref}>
            {questions.map((question, index) => (
              <li key={question.question_id}>
                <Question {...question} index={index} moveCard={moveCard} dbClick={dbClick} isChose={isChose}/>
              </li>
            ))}
          </List>)}
          {response.error && <Error/>}
        </Wrapper>
      </main>
    </>
  );
};
