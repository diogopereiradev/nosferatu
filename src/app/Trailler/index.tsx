import React from 'react';
import {
  Container, PlayButton, PlayContainer, Video, VideoContainer
} from './styles';

function Trailler (): JSX.Element {
  return (
    <Container>
      <VideoContainer>
        <Video src="https://www.youtube.com/embed/AqE9QwSYJNw?loop=1&playlist=AqE9QwSYJNw&mute=1&autoplay=1"/>
      </VideoContainer>
      <PlayContainer>
        <PlayButton onClick={() => window.open('https://www.youtube.com/watch?v=AqE9QwSYJNw', '_blank')}/>
      </PlayContainer>
    </Container>
  );
}
export default Trailler;