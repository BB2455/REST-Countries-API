import { createGlobalStyle } from "styled-components";

interface props {}

const GlobalStyles = createGlobalStyle<props>`
  * {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
