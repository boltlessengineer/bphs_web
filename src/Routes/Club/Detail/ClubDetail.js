import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  overflow: hidden;
  z-index: 9999;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8vw;
`;

const Logo = styled.div`
  background-color: lightgray;
  width: ${(props) => (props.size ? `${props.size * 5}px` : "160px")};
  height: ${(props) => (props.size ? `${props.size}px` : "32px")};
  font-size: ${(props) => (props.size ? `${props.size}px` : "32px")};
  line-height: 1;
`;

const NavList = styled.ul`
  display: flex;
  gap: 7vw;
  font-size: 24px;
  font-weight: 500;
`;

const Main = styled.main`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(80vh - 60px);
  padding: 0 8vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
`;

const Description = styled.text`
  padding-top: 20px;
  font-size: 24px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 18px;
`;

const Button = styled.button`
  border: none;
  border-radius: 12px;
  font-weight: bold;
  font-size: 24px;
  color: #202020;
  background-color: white;
  padding: 8px 12px;
  cursor: pointer;
`;

const JoinBtn = styled(Button)`
  background-color: #669beb;
  color: #f4f4f4;
`;

const MoreBtn = styled(Button)``;

const Gradient = styled.div``;

const BgContainer = styled.div`
  position: absolute;
  transform-origin: top right;
  width: 120vw;
  min-width: 60vh;
  height: calc(100vh + 100vw);

  transform: translateX(75vw) rotate(23deg);
  z-index: -1;

  & ${Gradient} {
    position: absolute;
    /* transform-origin: bottom left; */
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
    mix-blend-mode: multiply;
  }
  & ${Gradient}:nth-child(1) {
    left: 0;
    opacity: 10%;
  }
  & ${Gradient}:nth-child(2) {
    left: 106px;
    opacity: 30%;
  }
  & ${Gradient}:nth-child(3) {
    left: 171px;
    opacity: 50%;
  }
  & ${Gradient}:nth-child(4) {
    left: 206px;
    opacity: 40%;
  }
  & ${Gradient}:nth-child(5) {
    left: 220px;
    opacity: 70%;
  }
`;

const BgGradient = ({ color }) => (
  <BgContainer color={color}>
    <Gradient />
    <Gradient />
    <Gradient />
    <Gradient />
    <Gradient />
  </BgContainer>
);

const description =
  "메이커 동아리는 코딩, 모델링, 3d 프린팅을 포함한\n복합적인 maker 활동을 하는 동아리입니다.";

export default () => (
  <Container>
    <Header>
      <Logo>MAKER</Logo>
      <NavList>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
      </NavList>
    </Header>
    <BgGradient color="#669BEB" />
    <Main>
      <Logo size={100}>MAKER</Logo>
      <Description>
        {description.split("\n").map((i) => (
          <p>{i}</p>
        ))}
      </Description>
      <BtnContainer>
        <JoinBtn>가입하기</JoinBtn>
        <MoreBtn>더 알아보기</MoreBtn>
      </BtnContainer>
    </Main>
  </Container>
);
