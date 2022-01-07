import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from './assets/GlobalStyles';
import Wrapper from './components/Wrapper';

function App (): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper>
        
      </Wrapper>
    </React.Fragment>
  );
}
render(<App />, document.querySelector('.nosferatu-root'));