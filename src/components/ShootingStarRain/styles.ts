import styled from 'styled-components';
import { RainProps } from '../../types/shootingstarrain';
import screenMove from './keyframes';

export const Container = styled.div<RainProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  i {
    position: absolute;
    height: 200px;
    background: linear-gradient(transparent, #fff);
    border-radius: 10px;
    animation: ${screenMove} 5s linear infinite;
    transform: rotate(520px);
  }
`;