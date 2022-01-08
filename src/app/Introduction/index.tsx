import '../../types/global';
import React from 'react';
import IntroductionInfos from './introductiontext';
import {
  Container, 
  SectionTitleContainer,
  SectionTitle,
  IntroductionTextContainer,
  IntroductionTitle,
  LeftIrinaCharacter,
  RightLevCharacter
} from './styles';

import Irina from '../../assets/images/Irina.png';
import Lev from '../../assets/images/lev.png';

function Introduction (): JSX.Element {
  return (
    <Container id='introduction'>
      <LeftIrinaCharacter src={Irina} alt="left-irina-character"/>
      <RightLevCharacter src={Lev} alt="right-irina-character"/>
      <SectionTitleContainer>
        <SectionTitle>INTRODUCTION:</SectionTitle>
      </SectionTitleContainer>
      <IntroductionTextContainer>
        <IntroductionTitle>Tsuki to Laika to Nosferatu</IntroductionTitle>
        <IntroductionInfos />
      </IntroductionTextContainer>
    </Container>
  );
}
export default Introduction;