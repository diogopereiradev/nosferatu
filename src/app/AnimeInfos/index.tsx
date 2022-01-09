import React from 'react';
import { Container } from './styles';

import Infos from './infos';
import Synopsis from './synopsis';

function AnimeInfos (): JSX.Element {
  return (
    <Container>
      <Infos />
      <Synopsis />
    </Container>
  );
}
export default AnimeInfos;