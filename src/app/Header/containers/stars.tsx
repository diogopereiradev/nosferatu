import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { Stars } from '../styles';

export default function StarsResponsive (): JSX.Element {
  const [amount, setAmount]: [number, Dispatch<SetStateAction<number>>] = useState(60);
  
  useEffect((): void => {
    window.addEventListener('resize', () => 
      setAmount(Math.random() * (60 - 50) + 50));
  }, []);
  return <Stars amount={amount}/>;
}