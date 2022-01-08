import '../../types/global';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import {
  Container, 
  Stars,
  FrozenLake, 
  GrassTerrain, 
  GrassTerrainContainer,
  LeftGiantPineTree,
  RightGiantPineTree,
  Moon
} from './styles';
import Clouds from '../../components/Clouds/index';

import GrassTerrainImage from '../../assets/images/grassterrain.png';
import GiantPineTreeImage from '../../assets/images/giant-pine-tree.png';

function GrassTerrainMain (): JSX.Element {
  return (
    <GrassTerrainContainer>
      <GrassTerrain src={GrassTerrainImage} alt="grass-terrain-image"/>
      <GrassTerrain src={GrassTerrainImage} alt="grass-terrain-image"/>
    </GrassTerrainContainer>
  );
}

function StarsResponsive (): JSX.Element {
  const [amount, setAmount]: [number, Dispatch<SetStateAction<number>>] = useState(60);

  useEffect((): void => {
    window.addEventListener('resize', () => 
      setAmount(Math.random() * (60 - 50) + 50));
  }, []);
  return <Stars amount={amount}/>;
}

function Header (): JSX.Element {
  return (
    <Container>
      <Clouds amount={5}/>
      <StarsResponsive />
      <Moon />
      <FrozenLake />
      <GrassTerrainMain />
      <LeftGiantPineTree src={GiantPineTreeImage} alt="left-giant-pine-tree"/>
      <RightGiantPineTree src={GiantPineTreeImage} alt="right-giant-pine-tree"/>
    </Container>
  );
}
export default Header;