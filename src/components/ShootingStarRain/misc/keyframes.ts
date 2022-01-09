import { keyframes } from 'styled-components';

export default keyframes`
  from {transform: translateY(-200px) translateX(-200px) rotate(40deg);}
  to {
    opacity: 0;
    transform: translateY(calc(100vh)) translateX(calc(-100vh + 200px)) rotate(20deg);
  }
`;