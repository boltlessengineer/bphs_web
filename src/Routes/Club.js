import React from "react";
import styled from "styled-components";

const BgImg = styled.div`
  position: absolute;
  background-image: url("");
  background-color: #666666;
  width: 100vw;
  height: 30vh;
  z-index: -2;
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
  /* padding: 0 10vw; */
  display: flex;
  flex-direction: column;
  gap: 2vh;
  color: #202020;
  & > * {
    padding: 0 10vw;
  }
  & div.fullWidth {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Card = styled.div`
  position: relative;
  display: block;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 12px 24px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

const ClubCard = styled(Card)`
  width: 430px;
  height: 270px;
`;

const VerticalList = styled.div`
  display: grid;
  grid-gap: 28px;
  grid-template-columns: calc(10vw - 28px);
  grid-auto-flow: column;
  grid-auto-columns: 430px;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: 20px;
  &::before,
  &::after {
    content: "";
    width: calc(10vw - 28px);
  }
  &::-webkit-scrollbar {
    display: block;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-right: none;
    border-left: none;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-right: 10vw;
    height: 8px;
  }
  &::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-left: 10vw;
  }
  ${ClubCard} {
    scroll-snap-align: center;
  }
`;

const ClubList = ({ children }) => (
  <VerticalList className="fullWidth">{children}</VerticalList>
);

const H0 = styled.h1`
  font-weight: bold;
  font-size: 64px;
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 48px;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 36px;
`;

export default () => (
  <>
    <BgImg />
    <Greeting>
      <H0>창체동아리</H0>
    </Greeting>
    <Main>
      <H2>2020년 창체동아리 목록</H2>
      <H3>이공계</H3>
      <ClubList>
        <ClubCard>
          <H3>MAKER</H3>
        </ClubCard>
        <ClubCard>
          <H3>BLINK - Y</H3>
        </ClubCard>
        <ClubCard>
          <H3>BLINK - U</H3>
        </ClubCard>
        <ClubCard>
          <H3>BLINK - U</H3>
        </ClubCard>
      </ClubList>
      <H3>인문계</H3>
      <ClubList>
        <ClubCard>
          <H3>MAKER</H3>
        </ClubCard>
        <ClubCard>
          <H3>BLINK - Y</H3>
        </ClubCard>
        <ClubCard>
          <H3>BLINK - U</H3>
        </ClubCard>
        <ClubCard>
          <H3>BLINK - U</H3>
        </ClubCard>
      </ClubList>
      <H2>2019년 창체동아리 목록</H2>
    </Main>
  </>
);
