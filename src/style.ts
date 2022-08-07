import { createGlobalStyle } from "styled-components";
import { COLORS } from "constants/colors";

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  html {
    font-size: 10px;
  }
  
  header {
    flex:  0 1 auto;
  }
  
  main {
    flex: 1 1 auto
  }
  
  body {
    font: 1.6rem 'Roboto', sans-serif;
    color: ${COLORS.WHITE};
    background-color: ${COLORS.DARK_BLUE};
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: .25s;
  }
  
  button {
    font: inherit;
    border: 0;
    background-color: transparent;
    transition: .25s;
  }

  a,
  button {
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
`;
