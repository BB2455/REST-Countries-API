import { createGlobalStyle } from "styled-components";

interface props {}

const GlobalStyles = createGlobalStyle<props>`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.text};
    transition: all 0.2s;
  }
  body {
    
    background: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyles;
