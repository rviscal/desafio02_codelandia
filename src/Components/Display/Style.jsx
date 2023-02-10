import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
export const Box1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  width: 415px;
  height: 302px;
  background: #ebe9ea;
  margin-left: 50px;
  margin-bottom: 50px;
`;
export const ImgStyle = styled.img`
  width: 250px;
  height: 150px;
  margin: auto;
  &:hover {
    transform: scale(1.1);
  }
`;
