import React, { useEffect, useState } from 'react';
import ru from 'date-fns/locale/ru';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSearchParams } from 'react-router-dom';
import { useAction, useStore } from 'store';
import { DatePickerStyles } from './style';
import { useDebounce } from '../../hooks/useDebounce';
import { addDays, subDays } from 'date-fns';

interface Props {
  date: number;
}

registerLocale('ru', ru);

export const DateControl = React.memo(({date}: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date(date * 1000));
  const [isSearching, setIsSearching] = useState(false);
  const {initialDate} = useStore();
  const [, setSearchParams] = useSearchParams();
  const convertToUnix = (value: Date) => {
    return value.getTime() / 1000;
  };
  const handleDate = (value: Date) => {
    const convertedDate = convertToUnix(value);
    setSearchParams({date: `${convertedDate}`});
  };
  const debounceDate = useDebounce(currentDate, 1000);
  useEffect(() => {
    if (debounceDate && isSearching) {
      handleDate(debounceDate);
    }
  }, [debounceDate]);
  return (
    <>
      <DatePicker
        selected={currentDate}
        onChange={(date: Date) => setCurrentDate(date)}
        onCalendarClose={() => setIsSearching(true)}
        onCalendarOpen={() => setIsSearching(false)}
        locale={'ru'}
        dateFormat={'dd.MM.yy'}
        minDate={subDays(new Date(initialDate * 1000), 5)}
        maxDate={addDays(new Date, 0)}/>
      <DatePickerStyles/>
    </>
  );
});

