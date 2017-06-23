import { injectGlobal } from 'styled-components';
import color from './colors';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Exo+2:100,300,500');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${color.black};
    font-family: 'Exo 2', Arial, sans-serif;
    font-weight: 300;
  }
`;