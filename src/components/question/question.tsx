import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { Container, Detail, Box, Title, Score, Button } from './style';
import { useAction } from '../../store/useActions';

interface Props {
  score: number
  title: string
  owner: {
    display_name: string
    reputation: number
  },
  view_count: number
  is_answered: boolean
  question_id: number
}

export const Question = ({score, title, owner, view_count, is_answered, question_id}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {setScore} = useAction();
  let prevent = false;

  const increment = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setScore({question_id, score: score + 1});
  };
  const decrement = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setScore({question_id, score: score - 1});
  };
  const singleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const doubleClick = () => {
    prevent = true;
    console.log('boudle');
  };
  const handleClick = (e: MouseEvent) => {
    const timer = setTimeout(() => {
      if (!prevent) {
        singleClick();
      }
      prevent = false;
    }, 250);
    if (e.detail === 2) {
      clearTimeout(timer);
      doubleClick();
    }
  };

  const handler = (e: MouseEvent) => {
    if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [isOpen]);

  return (
    <Container ref={ref} onClick={handleClick}>
      <Box isAnswered={is_answered}>
        <Title title={title}>{title}</Title>
        <Score>
          <p>{score}</p>
          <Button type={'button'} onClick={increment}>+</Button>
          <Button type={'button'} onClick={decrement}>-</Button>
        </Score>
      </Box>
      <Detail isOpen={isOpen}>
        <p>Имя автора вопроса: <span>{owner.display_name}</span></p>
        <p>Рейтинг автора: <span>{owner.reputation}</span></p>
        <p>Количество просмотров: <span>{view_count}</span></p>
      </Detail>
    </Container>
  );
};
