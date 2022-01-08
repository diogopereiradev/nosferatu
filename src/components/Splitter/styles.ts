import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
`;

export const Lines = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #256fbc;

  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 20px;
    width: 70%;
    height: 5px;
    border-radius: 100px;
    background-color: #256fbc;
  }
`;