import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

  body {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
  }
`;

export default GlobalStyle;
