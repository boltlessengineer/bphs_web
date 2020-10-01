import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BgImg = styled.div`
  position: absolute;
  background-image: url("");
  background-color: #2c3e50;
  width: 100vw;
  height: 30vh;
  z-index: -2;

  /*그냥 우스게 스타일 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & span {
    font-size: 8em;
    font-weight: 900;
    opacity: 20%;
    display: inline-block;
    transform: rotate(5deg);
  }
  /*그냥 우스게 스타일 */
`;

const Greeting = styled.div`
  position: relative;
  padding: 0 10vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: left;
  color: #f6f6f6;
`;

const Main = styled.main`
  position: relative;
  top: 2vh;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  color: #202020;
`;

const H0 = styled.h1`
  font-weight: bold;
  font-size: 64px;
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 36px;
`;

const BtnInner = styled.span`
  font-size: 20px;
  display: inline-block;
  position: relative;
  transition: all 0.5s;
  margin: 0 10px;
`;

const SLink = styled(Link)`
  width: 220px;
  margin-top: 1.5vh;
  display: block;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #2ecc71;
  color: #fcfbfb;
  padding: 15px 20px;
  text-align: center;
  transition: all 0.5s;
  ${BtnInner}:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  &:hover ${BtnInner} {
    padding-right: 20px;
    margin: 0px;
    &:after {
      opacity: 1;
      right: 2px;
    }
  }
`;

const GoHome = ({ children }) => (
  <SLink to="/">
    <BtnInner>{children}</BtnInner>
  </SLink>
);

export default () => (
  <>
    <BgImg id="particleBg">
      <span>뭔가 엄청 멋진 배경</span>
    </BgImg>
    <Greeting>
      <H0>곧 만들어질 페이지입니다.</H0>
    </Greeting>
    <Main>
      <H2>이 페이지는 아직 준비중입니다!</H2>
      <p>아직 해당 페이지를 준비하지 못했어요. 조금만 기다려주세요.</p>
      <GoHome>메인으로 돌아가기</GoHome>
    </Main>
  </>
);
