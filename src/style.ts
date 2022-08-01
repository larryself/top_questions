import { createGlobalStyle } from 'styled-components';
import {COLORS} from 'constants/colors';

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    font: 1.6rem 'Roboto', sans-serif;
    color: ${COLORS.WHITE};
    background-color: ${COLORS.DARK_BLUE};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: .5s;
  }
  
  button {
    font: inherit;
    border: 0;
    background-color: transparent;
  }

  a,
  button {
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
`;