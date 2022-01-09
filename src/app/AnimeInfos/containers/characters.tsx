import '../../../types/global.types';
import React, { useRef, useEffect } from 'react';
import { CharactersMainContainer } from '../styles';
import sliderInit from '../scripts/sliderInit';
import Character from './character';

function Characters (): JSX.Element {
  const sliderRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const ref: HTMLDivElement = sliderRef.current;
    sliderInit(ref);
  }, []);

  return (
    <CharactersMainContainer ref={sliderRef}>
      <Character image="https://cdn.myanimelist.net/images/characters/14/436526.jpg" name="Luminesk, Irina" func="main"/>
      <Character image="https://cdn.myanimelist.net/images/characters/7/436528.jpg" name="Leps, Lev" func="main"/>
      <Character image="https://cdn.myanimelist.net/images/characters/13/455119.jpg" name="Simonyan, Anya" func="supporting"/>
      <Character image="https://cdn.myanimelist.net/images/characters/12/455118.jpg" name="Plevitskaya, Rosa" func="supporting"/>
      <Character image="https://cdn.myanimelist.net/images/characters/13/455113.jpg" name="Natalia" func="supporting"/>
      <Character image="https://cdn.myanimelist.net/images/characters/10/455111.jpg" name="Harlova, Ludmila" func="supporting"/>
      <Character image="https://cdn.myanimelist.net/images/characters/10/455115.jpg" name="Victor" func="supporting"/>
      <Character image="https://cdn.myanimelist.net/images/characters/16/455116.jpg" name="Korovin, Slava" func="supporting"/>
      <Character image="https://cdn.myanimelist.net/images/characters/3/455112.jpg" name="Gergiev, Fyodor" func="supporting"/>
    </CharactersMainContainer>
  );
}
export default Characters;