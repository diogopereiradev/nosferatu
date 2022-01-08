import '../../types/global';
import React from 'react';
import {
  Container, 
  FrozenLake, 
  Moon,
  MainTitleContainer,
  MainTitle,
  SeeMoreButton
} from './styles';

import StarsResponsive from './stars';
import Terrain from './terrain';
import Clouds from '../../components/Clouds/index';

function Header (): JSX.Element {
  return (
    <Container>
      <Moon />
      <Clouds amount={5}/>
      <StarsResponsive />
      <Terrain />
      <FrozenLake />
      <MainTitleContainer>
        <MainTitle>Nosferatu</MainTitle>
        <SeeMoreButton href="#introduction">See more</SeeMoreButton>
      </MainTitleContainer>
    </Container>
  );
}
export default Header;