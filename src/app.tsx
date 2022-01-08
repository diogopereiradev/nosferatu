import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from './assets/GlobalStyles';
import Wrapper from './components/Wrapper';
import Header from './app/Header';

function App (): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper className="loading">
        <Header />
      </Wrapper>
    </React.Fragment>
  );
}

window.onload = () => {
  render(<App />, document.querySelector('.nosferatu-root'));

  setTimeout(() => {
    const loading = document.querySelector('.loading');
    loading.classList.toggle('loading');
  }, 250);
};