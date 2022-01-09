import styled from 'styled-components';
import { StarsProps } from '../../types/components/Header.types';

function multipleStars (n: number): string {
  const shadows: Array<string>  = [];

  for (let i = 0; i < n; i++)
    shadows.push(`${Math.random() * window.innerWidth}px ${Math.random() * window.innerHeight}px #fff`);
  return shadows.join(', ');
}

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 620px;
  max-height: 950px;
  overflow: hidden;
  background: rgb(0,3,45);
  background: linear-gradient(0deg, rgba(0,3,45,1) 0%, rgba(0,2,20,1) 100%);
  user-select: none;
`;

export const MainTitleContainer = styled.div`
  position: relative;
  top: 28%;
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1500px) {top: 32%;}
  @media screen and (max-width: 650px) {top: 34%;}
`;

export const MainTitle = styled.h1`
  font-family: 'Permanent Marker', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 900;
  font-size: 150px;
  color: #002;
  letter-spacing: 10px;

  @media screen and (max-width: 1500px) {font-size: 130px;}
  @media screen and (max-width: 1000px) {font-size: 100px;}
  @media screen and (max-width: 850px) {font-size: 86px;}
  @media screen and (max-width: 650px) {font-size: 70px;}
  @media screen and (max-width: 450px) {font-size: 50px;}
  @media screen and (max-width: 350px) {font-size: 40px;}
  @media screen and (max-width: 300px) {font-size: 35px;}
`;

export const SeeMoreButton = styled.a`
  margin-top: 15px;
  color: #fff;
  padding: 15px;
  padding-left: 45px;
  padding-right: 45px;
  font-family: monospace;
  font-weight: 900;
  font-size: 16px;
  background-color: #002f;
  border-radius: 5px;
  cursor: pointer;

  &:hover {background-color: #001233;}
  &:active {background-color: #001;}

  @media screen and (max-width: 1000px) {padding: 15px 35px;}
  @media screen and (max-width: 450px) {padding: 13px 26px;}
`;

export const Stars = styled.div<StarsProps>`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${props => multipleStars(props.amount)};
  z-index: -1;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${props => multipleStars(props.amount)};
  }
`;

export const Moon = styled.div`
  position: absolute;
  left: 50%;
  top: 160px;
  margin-left: -375px;
  width: 750px;
  height: 750px;
  background-color: #d8fffc;
  border-radius: 100%;
  box-shadow: 0px 0px 120px #d8fffc;
  z-index: 0;

  @media screen and (max-width: 1800px) {top: 30px;}
  @media screen and (max-width: 1500px) {top: 30px;}
  @media screen and (max-width: 650px) {top: 120px;}
`;

export const FrozenLake = styled.div`
  position: absolute;
  bottom: -250px;
  width: 100%;
  height: 900px;
  background: rgb(147,214,210);
  background: linear-gradient(180deg, rgba(147,214,210,0.6278886554621849) 0%, rgba(76,162,156,0.7259278711484594) 100%);
  transform-style: preserve-3d;
  transform: rotateX(70deg);
  z-index: 0;
  
  @media screen and (max-width: 1500px) {bottom: -320px;}
  @media screen and (max-width: 900px) {border-radius: 0px;}
`;

export const GrassTerrainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -140px;
  left: 50%;
  margin-left: -50%;

  img:nth-child(1) {margin-right: -40px;}

  @media screen and (min-width: 3300px) {bottom: -290px}
  @media screen and (max-width: 1500px) {bottom: -180px;}
  @media screen and (max-width: 950px) {bottom: -80px;}
  @media screen and (max-width: 600px) {bottom: -40px;}
  @media screen and (max-width: 450px) {bottom: -35px;}
`;

export const GrassTerrain = styled.img`
  width: 100%;
  object-fit: contain;
  pointer-events: none;

  @media screen and (max-width: 550px) {width: 500px;}
  @media screen and (max-width: 850px) {width: 750px;}
`;

export const LeftGiantPineTree = styled.img`
  width: 750px;
  position: absolute;
  left: -365px;
  top: 0;
  pointer-events: none;

  @media screen and (max-width: 850px) {left: -430px;}
  @media screen and (max-width: 600px) {left: -500px;}
  @media screen and (max-width: 450px) {left: -550px;}
`;

export const RightGiantPineTree = styled.img`
  width: 750px;
  position: absolute;
  right: -365px;
  top: 0;
  pointer-events: none;

  @media screen and (max-width: 850px) {right: -430px;}
  @media screen and (max-width: 600px) {right: -500px;}
  @media screen and (max-width: 600px) {right: -550px;}
`;