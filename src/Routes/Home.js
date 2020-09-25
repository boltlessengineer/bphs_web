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
  position: absolute;
  padding: 0 10vw;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Main = styled.main`
  position: relative;
  top: 25vh;
  padding: 0 10vw;
  display: flex;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.section`
  display: block;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 12px 24px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

const CalendarSection = styled(Section)`
  flex: 1;
`;

const MealSection = styled(Section)`
  flex: 1;
`;

const PostSection = styled(Section)`
  flex: 2;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 48px;
`;

const H2 = styled.h2`
  font-size: 36px;
`;

export default () => (
  <div>
    <BgImg />
    <Greeting>
      <H1>보평고등학교 메인에 오신 것을 환영합니다.</H1>
    </Greeting>
    <Main>
      <List>
        <CalendarSection>
          <H2>오늘은</H2>
          <p>9월 25일 금요일</p>
          <p>특별한 일정이 없습니다.</p>
        </CalendarSection>
        <MealSection>
          <H2>오늘의 급식</H2>
          <ul>
            <li>압맥밥</li>
            <li>통마늘돈육오븐구이</li>
            <li>배추김치</li>
            <li>김치콩나물국</li>
            <li>해물파전</li>
            <li>쌈채</li>
          </ul>
        </MealSection>
      </List>
      <PostSection>
        <H2>공지사항</H2>
      </PostSection>
    </Main>
  </div>
);
