import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 ${reset}
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    background-color:#ffffff;
    height:100vh;
  }
  a{text-decoration:none;}
  a:link { color:black; }
  a:visited { color:black; }
`;

export default GlobalStyle;
