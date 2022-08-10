import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  input, button, textarea, select {
    font-family: 'Roboto', sans-serif;
    border: none;
    outline: none;
    background: none;
    color: inherit;
  }

`;

export default GlobalStyles;
