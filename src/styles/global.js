import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%; //1rem = 10px
    box-sizing: border-box;
    line-height: 1.15;
  }
  
  body{
    background: ${(props) => props.theme.colors.main};
  }

  * {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
    border: 0;  
    outline: none;
    box-sizing: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }

  form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

`;
