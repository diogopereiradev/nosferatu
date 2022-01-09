import React from 'react';
import {
  IntroductionParagraph
} from '../styles';

function IntroductionInfos (): JSX.Element {
  return (
    <React.Fragment>
      <IntroductionParagraph>
        On November 23, 1957 the entire world witnessed the
        monumental achievement of the Federal Republic of Zirnitra to 
        send the first living animal - a dog - into outer space.
      </IntroductionParagraph>
      <IntroductionParagraph>
        Since a dog&apos;s biology is inherently different from a 
        human&apos;s anatomy, there is no way to identify the risks 
        involved in space travel.
      </IntroductionParagraph>
      <IntroductionParagraph>
        Zirnitra&apos;s government has a 
        potential solution: experiment on vampires
        whose biological similarity to humans is too significant to ignore.
      </IntroductionParagraph>
      <IntroductionParagraph>
        Despite having been forcibly taken from her home in the mountains
        vampire Irina Luminesk shows 
        no resistance and is even willing to train as a 
        guinea pig.
      </IntroductionParagraph>
    </React.Fragment>
  );
}
export default IntroductionInfos;