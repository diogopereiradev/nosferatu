import React from 'react';
import { 
  GrassTerrain, 
  GrassTerrainContainer,
  LeftGiantPineTree,
  RightGiantPineTree
} from './styles';
import GrassTerrainImage from '../../assets/images/grassterrain.png';
import GiantPineTreeImage from '../../assets/images/giant-pine-tree.png';

export default function Terrain (): JSX.Element {
  return (
    <React.Fragment>
      <LeftGiantPineTree src={GiantPineTreeImage} alt="left-giant-pine-tree"/>
      <RightGiantPineTree src={GiantPineTreeImage} alt="right-giant-pine-tree"/>
      <GrassTerrainContainer>
        <GrassTerrain src={GrassTerrainImage} alt="grass-terrain-image"/>
        <GrassTerrain src={GrassTerrainImage} alt="grass-terrain-image"/>
      </GrassTerrainContainer>
    </React.Fragment>
  );
}