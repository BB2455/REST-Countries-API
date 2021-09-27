import { createGlobalStyle } from "styled-components";

interface props {}

const GlobalStyles = createGlobalStyle<props>`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
    transition: background 0.2s;
  }
  body {
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    
  }
`;

export default GlobalStyles;
