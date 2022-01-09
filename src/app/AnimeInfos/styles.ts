import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 700px;
  padding: 100px 15px;
  background-color: rgba(0,2,20,1);
`;

export const InfosContainer = styled.div`
  width: 50%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

export const InfosTitle = styled.div`
  font-family: 'Permanent Marker';
  font-size: 30px;
  color: #e3e3e3;
`;

export const InfosThumb = styled.img`
  width: 200px;
  object-fit: contain;
  margin-left: 20px;
  margin-top: 25px;
  border-radius: 5px;
`;

export const InfosAnimeSpecsContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export const InfosSpecsContainer = styled.div`
  width: 240px;
  height: 300px;
  background-color: #25294b;
`;

export const InfosSpecsTitle = styled.div``;

export const InfosSpecsMessageContainer = styled.div``;

export const InfosSpecsMessageValue = styled.p``;

export const InfosSpecsMessageResponse = styled.p``;

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