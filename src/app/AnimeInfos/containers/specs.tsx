import React from 'react';
import { InfosSpecsContainer, InfosSpecsTitle } from '../styles';
import SpecMessage from './specsmessage';

function Specs (): JSX.Element {
  return (
    <InfosSpecsContainer>
      <InfosSpecsTitle>Anime specs</InfosSpecsTitle>
      <SpecMessage value="Episodes:" response="12"/>
      <SpecMessage value="Status:" response="Finished"/>
      <SpecMessage value="Aired:" response="Oct 4, 2021 to Dec 20, 2021"/>
      <SpecMessage value="Themes:" response="Space, Vampire"/>
      <SpecMessage value="Duration:" response="23 min"/>
    </InfosSpecsContainer>
  );
}
export default Specs;