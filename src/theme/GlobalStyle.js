import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');
/* @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,900&display=swap'); */

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%; /* happy rems */
}

body {
  padding-left: 150px;
  font-size: 1.6rem; /* happy rems */
  font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
