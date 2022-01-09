import React from 'react';
import {
  InfosSpecsMessageContainer,
  InfosSpecsMessageValue,
  InfosSpecsMessageResponse
} from '../styles';
import { SpecsMessagesProps } from '../../../types/specsmessage';

function SpecsMessage ({ value, response }: SpecsMessagesProps): JSX.Element {
  return (
    <InfosSpecsMessageContainer>
      <InfosSpecsMessageValue>{value}</InfosSpecsMessageValue>
      <InfosSpecsMessageResponse>{response}</InfosSpecsMessageResponse>
    </InfosSpecsMessageContainer>
  );
}
export default SpecsMessage;