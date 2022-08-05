import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../constants/colors';

export const DatePickerStyles = createGlobalStyle`
  .react-datepicker-wrapper {
    width: auto;
  }

  .react-datepicker {
    background: white;
    box-sizing: border-box;
    padding: 19px 15px 15px;
    border-radius: 4px;
    position: relative;
  }

  .react-datepicker__input-container > input {
    padding: 10px 15px;
    font-size: 1.6rem;
    border: 1px solid ${COLORS.MIDDLE_BLUE};
    outline: none;
    border-radius: 15px;

    &:focus {
      border-color: ${COLORS.LIGHT_BLUE};
      box-shadow: 0 0 3px 3px ${COLORS.LIGHT_BLUE};
    }
  }

  .react-datepicker__navigation {
    cursor: pointer;
    position: absolute;
    top: 16px;
  }

  .react-datepicker__header {
    background: inherit;
    padding: 3px 0 20px;
  }

  .react-datepicker__current-month {
    text-transform: capitalize;
    font-size: 1.6rem;
  }
  
  .react-datepicker__month {
    margin-left: 0;
    margin-right: 0;
  }

  .react-datepicker__day-names {
    font-size: 1.4rem;
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  .react-datepicker__day-name {
    text-transform: capitalize;
    width: 27px;
  }

  .react-datepicker__day {
    margin: 0;
    width: 27px;
  }

  .react-datepicker__week {
    display: flex;
    gap: 10px;
    justify-content: space-around;
  }

  .react-datepicker__month {
    font-size: 1.4rem;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
`;
