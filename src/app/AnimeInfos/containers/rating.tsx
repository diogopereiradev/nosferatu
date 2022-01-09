import React from 'react';
import { InfosSpecsContainer, InfosSpecsTitle } from '../styles';
import SpecMessage from './specsmessage';

function Rating (): JSX.Element {
  return (
    <InfosSpecsContainer>
      <InfosSpecsTitle>Anime rating</InfosSpecsTitle>
      <SpecMessage value="Score:" response="7.26"/>
      <SpecMessage value="Ranked:" response="#2157"/>
      <SpecMessage value="Popularity:" response="#1659"/>
      <SpecMessage value="Members:" response="99,843"/>
      <SpecMessage value="Favorites:" response="524"/>
    </InfosSpecsContainer>
  );
}
export default Rating;