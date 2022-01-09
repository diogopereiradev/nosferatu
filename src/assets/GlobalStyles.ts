import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 1;
    scroll-behavior: smooth;
  }
  
  button, hr, a, ul, ol, input {
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;
    list-style: none;
    -webkit-tap-highlight-color: transparent;
  }

  img {pointer-events: none;}

  body {background-color: rgba(0,2,20,1);}
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #9bc5cbdd;
  }
`;