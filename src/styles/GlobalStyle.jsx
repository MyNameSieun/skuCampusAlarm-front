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

  img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
`;

export default GlobalStyle;
