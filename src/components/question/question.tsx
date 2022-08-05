import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { Container, Detail, Box, Title, Score, Button, Author, Img, IconInner } from './style';
import { useAction } from 'store';
import { useDrag, useDrop } from 'react-dnd';
import { Tags, Plus, Minus } from 'components';
import { Approved } from '../icon';
import { IQuestion } from '../../types/question';

interface Props  extends IQuestion{
  index: number
  moveCard: (dragIndex: number, dropIndex: number) => void
  dbClick: ({id, index}: { id: number, index: number }) => void
  isChose: { id: number, index: number }[]
}

interface DragItem {
  question_id: number;
  index: number;
}

export const Question = React.memo(({
                                      score,
                                      title,
                                      owner,
                                      view_count,
                                      is_answered,
                                      question_id,
                                      index,
                                      moveCard,
                                      tags,
                                      dbClick,
                                      isChose,
                                    }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {setScore} = useAction();
  const isActiveChoose = isChose.some((item) => item.id === question_id);
  const [, drop] = useDrop({
    accept: 'question',
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
  const [, drag] = useDrag({
    type: 'question',
    item: {question_id, index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

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
    dbClick({id: question_id, index});
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
  const handleClickOutside = (e: Event) => {
    if (!isActiveChoose && ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  drag(drop(ref));
  return (
    <Container ref={ref} isActiveChoose={isActiveChoose}>
      <Box isAnswered={is_answered} onClick={handleClick} isActiveChoose={isActiveChoose}>
        {is_answered ? (
          <IconInner>
            <Approved/>
          </IconInner>) : null}
        <Title title={title}>{title}</Title>
        <Score>
          <p>{score}</p>
          <Button type={'button'} onClick={increment}>
            <Plus/>
          </Button>
          <Button type={'button'} onClick={decrement}>
            <Minus/>
          </Button>
        </Score>
      </Box>
      <Detail isOpen={isOpen}>
        <Author>
          <p>Автор: <span>{owner.display_name}</span></p>
          <Img src={owner.profile_image} alt={owner.display_name} width={50} height={50}/>
        </Author>
        <p>Рейтинг автора: <span>{owner.reputation}</span></p>
        <p>Количество просмотров: <span>{view_count}</span></p>
        <Tags tags={tags}/>
      </Detail>
    </Container>
  );
});
