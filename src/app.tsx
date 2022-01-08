import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from './assets/GlobalStyles';
import Wrapper from './components/Wrapper';
import Header from './app/Header';

function App (): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper>
        <Header />
      </Wrapper>
    </React.Fragment>
  );
}
render(<App />, document.querySelector('.nosferatu-root'));