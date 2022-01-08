import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from './assets/GlobalStyles';
import Wrapper from './components/Wrapper';
import Splitter from './components/Splitter';
import Header from './app/Header';
import Introduction from './app/Introduction';

function App (): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Splitter />
        <Introduction />
        <Splitter />
      </Wrapper>
    </React.Fragment>
  );
}
render(<App />, document.querySelector('.nosferatu-root'));