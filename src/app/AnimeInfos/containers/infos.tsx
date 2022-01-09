import '../../../types/global.types';
import React, { useEffect, useRef } from 'react';
import {
  InfosFlexboxContainer,
  InfosAnimeSpecsContainer,
  InfosContainer,  
  InfosThumb, 
  InfosTitle
} from '../styles';
import sliderInit from '../scripts/sliderInit';

import Specs from './specs';
import Rating from './rating';
import AnimeThumb from '../../../assets/images/animethumb.jpg';
import Characters from './characters';

function Infos (): JSX.Element {
  const sliderRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const ref: HTMLDivElement = sliderRef.current;
    sliderInit(ref);
  }, []);
  return (
    <InfosContainer>
      <InfosTitle>Anime infos</InfosTitle>
      <InfosFlexboxContainer>
        <InfosThumb src={AnimeThumb} alt="anime-thumbnail-image"/>
        <InfosAnimeSpecsContainer ref={sliderRef}>
          <Specs />
          <Rating />
        </InfosAnimeSpecsContainer>
      </InfosFlexboxContainer>
      <Characters />
    </InfosContainer>
  );
}
export default Infos;