import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 56.25vw;
  max-height: 600px;
  overflow: hidden;
`;

export const PlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  z-index: 2;
`;

export const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  clip-path: polygon(0 0, 0% 100%, 100% 48%);
  cursor: pointer;

  &:hover {background-color: #909090;}
  &:active {background-color: #505050;}
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  z-index: -1;
`;

export const Video = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 56.25vw;
  border: none;
`;