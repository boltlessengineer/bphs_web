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
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
`;

const Main = styled.main`
  /* position: relative;
  top: 25vh; */
  padding: 0 10vw;
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
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
  min-height: 180px;
`;

const MealSection = styled(Section)`
  flex: 1;
  min-height: 280px;
`;

const PostSection = styled(Section)`
  flex: 2;
`;

const CalSecContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Today = styled.p`
  margin-top: 8px;
`;

const ScheduleList = styled.p`
  margin-top: 14px;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 48px;
`;

const H2 = styled.h2`
  font-size: 36px;
`;

export default () => (
  <>
    <BgImg />
    <Greeting>
      <H1>보평고등학교&nbsp;메인에 오신&nbsp;것을 환영합니다.</H1>
    </Greeting>
    <Main>
      <List>
        <CalendarSection>
          <CalSecContainer>
            <H2>오늘은</H2>
            <H2>
              <span role="img" aria-label="calendar">
                📅
              </span>
            </H2>
          </CalSecContainer>
          <Today>9월 25일 금요일</Today>
          <ScheduleList>특별한 일정이 없습니다.</ScheduleList>
        </CalendarSection>
        <MealSection>
          <H2>오늘의 급식</H2>
          <span>중식</span> | <span>석식</span>
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
        <h3>공지사항</h3>
      </PostSection>
    </Main>
  </>
);
