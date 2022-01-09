import '../../../types/global.types';
import React from 'react';
import {
  InfosAnimeSpecsContainer,
  InfosContainer,  
  InfosThumb, 
  InfosTitle
} from '../styles';

import AnimeThumb from '../../../assets/images/animethumb.jpg';

function Infos (): JSX.Element {
  return (
    <InfosContainer>
      <InfosTitle>Anime infos</InfosTitle>
      <InfosThumb src={AnimeThumb} alt="anime-thumbnail-image"/>
      <InfosAnimeSpecsContainer>
        
      </InfosAnimeSpecsContainer>
    </InfosContainer>
  );
}
export default Infos;