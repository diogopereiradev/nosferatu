import React from 'react';
import { Container } from './styles';

import Infos from './containers/infos';
import Synopsis from './containers/synopsis';

function AnimeInfos (): JSX.Element {
  return (
    <Container>
      <Infos />
      <Synopsis />
    </Container>
  );
}
export default AnimeInfos;