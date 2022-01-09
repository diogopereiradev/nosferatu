import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 700px;
  padding: 100px 15px;
  background-color: rgba(0,2,20,1);

  @media screen and (max-width: 1200px) {flex-direction: column;}
`;

export const InfosContainer = styled.div`
  width: 50%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;

  @media screen and (max-width: 1200px) {width: 100%;}
`;

export const InfosTitle = styled.div`
  font-family: 'Permanent Marker';
  font-size: 30px;
  color: #e3e3e3;
`;

export const InfosFlexboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const InfosThumb = styled.img`
  width: 200px;
  object-fit: contain;
  margin-left: 20px;
  margin-top: 25px;
  border-radius: 5px;

  @media screen and (max-width: 600px) {display: none;}
`;

export const InfosAnimeSpecsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 300px;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-top: 40px;
`;

export const InfosSpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 285px;
  background-color: #25294b;
  border-radius: 6px;
  padding: 15px;
  gap: 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-thumb {border-radius: 6px;}
`;

export const InfosSpecsTitle = styled.div`
  font-family: Nunito;
  font-weight: 900;
  font-size: 20px;
  color: #e3e3e3;
`;

export const InfosSpecsMessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  padding: 10px 15px;
  background-color: #6a6fa0;
  border-radius: 5px;
`;

export const InfosSpecsMessageValue = styled.p`
  font-family: monospace;
  font-weight: 500;
  font-size: 13px;
  color: #e3e3e3;
`;

export const InfosSpecsMessageResponse = styled.p`
  font-family: monospace;
  font-weight: 500;
  font-size: 12px;
  color: #303030;
`;

export const CharacterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #25294b;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 100px;
    width: 10px;
    height: 200px;
    background-color: #25294b;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 100px;
    width: 10px;
    height: 200px;
    background-color: #25294b;
  }
`;

export const CharacterAvatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: top;
  border: 5px solid #6a6fa0;
`;

export const CharacterName = styled.p`
  font-family: monospace;
  font-weight: 900;
  font-size: 16px;
  color: #e3e3e3;
  margin-top: 10px;
`;

export const CharacterFunc = styled.p`
  font-family: monospace;
  font-weight: 900;
  font-size: 16px;
  color: #6a6fa0;
  margin-top: 4px;
`;

export const CharactersMainContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 250px;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 35px;
`;

export const SynopsisContainer = styled.div`
  width: 50%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 60px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 20px;
  }
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