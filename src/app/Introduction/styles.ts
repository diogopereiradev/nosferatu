import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 830px;
  background-color: rgba(0,2,20,1);
  padding: 20px;
`;

export const SectionTitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-family: 'Bebas Neue';
  font-weight: 900;
  font-size: 80px;
  color: #b03b3b;

  @media screen and (max-width: 500px) {font-size: 45px;}
  @media screen and (max-width: 400px) {font-size: 50px;}
`;

export const IntroductionTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  padding: 20px;
`;

export const IntroductionTitle = styled.h2`
  font-family: Nunito;
  font-weight: 900;
  font-size: 60px;
  color: #e3e3e3;
  text-align: center;

  @media screen and (max-width: 600px) {font-size: 40px;}
  @media screen and (max-width: 400px) {font-size: 30px;}
  @media screen and (max-width: 350px) {font-size: 22px;}
`;

export const IntroductionParagraph = styled.p`
  max-width: 800px;
  word-break: break-all;
  font-family: monospace;
  font-weight: 100;
  font-size: 21px;
  color: #e3e3e3;
  margin-top: 40px;
`;

export const LeftIrinaCharacter = styled.img`
  width: 300px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 160px;

  @media screen and (max-width: 1300px) {display: none;}
`;

export const RightLevCharacter = styled.img`
  width: 300px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  right: 0px;
  top: 160px;
  
  @media screen and (max-width: 1300px) {display: none;}
`;