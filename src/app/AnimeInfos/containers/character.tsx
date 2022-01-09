import React from 'react';
import { 
  CharacterAvatar, 
  CharacterContainer, 
  CharacterFunc,
  CharacterName 
} from '../styles';
import { CharacterProps } from '../../../types/components/Character.types';

function Character ({ image, name, func }: CharacterProps): JSX.Element {
  return (
    <CharacterContainer>
      <CharacterAvatar src={image} alt={`${name}-character-image`}/>
      <CharacterName>{name}</CharacterName>
      <CharacterFunc>{func}</CharacterFunc>
    </CharacterContainer>
  );
}
export default Character;