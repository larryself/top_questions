import React from 'react';
import ru from 'date-fns/locale/ru';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSearchParams } from 'react-router-dom';
import { useAction } from 'store';
import { DatePickerStyles } from './style';

interface Props {
  date: number;
}

registerLocale('ru', ru);

export const DateControl = React.memo(({date}: Props) => {
  const {setDate} = useAction();
  const [, setSearchParams] = useSearchParams();
  const convertToUnix = (value: Date) => {
    return value.getTime() / 1000;
  };

  const handleDate = (e: Date) => {
    const convertedDate = convertToUnix(e);
    setSearchParams({date: `${convertedDate}`});
    setDate(convertedDate);
  };
  return (
    <>
      <DatePicker selected={new Date(date * 1000)} onChange={handleDate} locale={'ru'}/>
      <DatePickerStyles/>
    </>
  );
});

