import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    margin: 0 0 30px 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    padding-top: 15px;
  }
`;
