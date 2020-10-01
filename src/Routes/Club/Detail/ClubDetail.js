import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: #f4f4f4;

  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Gradient = styled.div`
  width: ${(props) => props.width};
  height: 100%;
`;

const BgContainer = styled.div`
  position: absolute;
  /* left: 60vw; */
  right: -15vw;
  width: 60vw;
  /* 모바일 고려해서 right, width 수정할것! */
  height: 160vh;
  /* transform-origin: bottom left; */
  display: flex;
  transform: rotate(23deg);
  & ${Gradient} {
    background-color: ${(props) => props.color};
  }
  & ${Gradient}:nth-child(1) {
    opacity: 10%;
  }
  & ${Gradient}:nth-child(2) {
    opacity: 50%;
  }
  & ${Gradient}:nth-child(3) {
    opacity: 70%;
  }
  & ${Gradient}:nth-child(4) {
    opacity: 90%;
  }
`;

const BgGradient = ({ color }) => (
  <BgContainer color={color}>
    <Gradient width="108px" />
    <Gradient width="67px" />
    <Gradient width="34px" />
    <Gradient width="14px" />
    <Gradient width="calc(100% - 223px)" />
  </BgContainer>
);

export default () => (
  <Container>
    <BgGradient color="#4175DF" />
  </Container>
);
