import React from 'react';
import {
  SynopsisContainer,
  SynopsisTitle,
  SynopsisText
} from './styles';

function Synopsis (): JSX.Element {
  return (
    <SynopsisContainer>
      <SynopsisTitle>Synopsis</SynopsisTitle>
      <SynopsisText>
        On November 23, 1957, the whole world witnessed the Federal Republic 
        of Zirnitra&apos;s monumental achievement of sending the first live animal—a 
        dog—to outer space. Since then, the space race between the confederacy 
        and its competitor, the United Kingdom of Arnack, has intensified; the two 
        countries hope to one day send humans to the cosmos above.
      </SynopsisText>
      <SynopsisText>
        As a dog&apos;s biology is inherently different from a human&apos;s anatomy, there 
        is no way to perfectly identify the risks involving space travel and its 
        effects on an individual&apos;s body without actually sending someone for observation.
        However, Zirnitra&apos;s government has a potential solution: to experiment on vampires, 
        whose biological similarity to humans is too significant to ignore.
      </SynopsisText>
      <SynopsisText>
        Despite being forcibly taken from her home in the mountains, vampire Irina Luminesk shows 
        no resistance and is even willing to train as a test subject. Lev Leps, a former top candidate 
        to become the first human cosmonaut, is designated to accompany Irina and act as her guide. 
        Through their time together, Irina and Lev begin to develop a mutual love for outer space, 
        bringing them closer together.
      </SynopsisText>
    </SynopsisContainer>
  );
}
export default Synopsis;