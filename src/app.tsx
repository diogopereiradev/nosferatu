import React, { Fragment } from 'react';
import { render } from 'react-dom';

import GlobalStyles from './assets/GlobalStyles';
import Wrapper from './components/Wrapper/index';
import Splitter from './components/Splitter/index';
import Header from './app/Header/index';
import Introduction from './app/Introduction/index';
import AnimeInfos from './app/AnimeInfos/index';
import Trailler from './app/Trailler/index';

function App (): JSX.Element {
  return (
    <Fragment>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Splitter />
        <Introduction />
        <Splitter />
        <AnimeInfos />
        <Splitter />
        <Trailler />
        <Splitter />
      </Wrapper>
    </Fragment>
  );
}
render(<App />, document.querySelector('.nosferatu-root'));