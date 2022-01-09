import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from './assets/GlobalStyles';
import Wrapper from './components/Wrapper/index';
import Splitter from './components/Splitter/index';
import Header from './app/Header/index';
import Introduction from './app/Introduction/index';
import Trailler from './app/Trailler/index';

function App (): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Splitter />
        <Introduction />
        <Splitter />
        <Trailler />
        <Splitter />
      </Wrapper>
    </React.Fragment>
  );
}
render(<App />, document.querySelector('.nosferatu-root'));