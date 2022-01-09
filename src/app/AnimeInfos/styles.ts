import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 700px;
  height: 700px;
  background-color: rgba(0,2,20,1);
`;

export const InfosContainer = styled.div`
  width: 50%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export const InfosTitle = styled.div`
  font-family: 'Permanent Marker';
  font-size: 30px;
  color: #e3e3e3;
`;

export const SynopsisContainer = styled.div`
  width: 50%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 60px;
`;

export const SynopsisTitle = styled.div`
  font-family: 'Permanent Marker';
  font-size: 30px;
  color: #e3e3e3;
`;

export const SynopsisText = styled.div`
  word-break: break-all;
  font-family: monospace;
  font-weight: 100;
  font-size: 17px;
  color: #e3e3e3;
  margin-top: 30px;
`;