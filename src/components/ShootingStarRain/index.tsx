import React, { useEffect, useRef } from 'react';
import { Container } from './styles';
import { RainProps } from '../../types/components/ShootingStarRain.types';
import start from './misc/start';

function Rain(props: RainProps): JSX.Element {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const ref: HTMLDivElement = containerRef.current;
    start(ref, props.amount);

    window.onresize = () => {
      ref.textContent = '';
      start(ref, props.amount);
    };
  }, []);
  return <Container ref={containerRef} {...props}/>;
}
export default Rain;