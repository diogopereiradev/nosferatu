import React, { useEffect, useRef } from 'react';
import { Container } from './styles';
import { RainProps } from '../../types/shootingstarrain';
import start from './start';

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