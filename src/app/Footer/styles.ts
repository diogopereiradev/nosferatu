import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #00010b;
  padding: 25px;
`;

export const DeveloperInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  height: 100%;
  margin-top: 35px;
`;

export const DeveloperInfosText = styled.h2`
  font-family: monospace;
  font-weight: 500;
  font-size: 20px;
  color: #979fe1;
  word-break: break-all;
`;

export const DeveloperInfosSocialMediasContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DeveloperInfosSocialMediasAnchor = styled.a`
  cursor: pointer;
  padding: 10px 5px;
`;

export const AnimeLogo = styled.img`
  width: 300px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {display: none;}
`;