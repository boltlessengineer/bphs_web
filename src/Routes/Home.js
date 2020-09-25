import React from "react";
import styled from "styled-components";

const BgImg = styled.div`
  position: absolute;
  background-image: url("");
  background-color: #d0d0d0;
  width: 100vw;
  height: 25vh;
  z-index: -2;
`;

const Greeting = styled.div`
  position: absolute;
  padding: 0 7vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

const Main = styled.main`
  padding: 20vh 7vw 0 7vw;
`;

const Section = styled.section`
  display: block;
  background-color: #ffffff;
  border-radius: 30px;
  min-height: 80px;
  padding: 12px 24px;
`;

export default () => (
  <div>
    <BgImg />
    <Greeting>
      <h1>보평고등학교 메인에 오신 것을 환영합니다.</h1>
    </Greeting>
    <Main>
      <Section>
        <h1>오늘은</h1>
      </Section>
      <Section>
        <h1>오늘의 급식</h1>
      </Section>
      <Section>
        <h1>공지사항</h1>
      </Section>
    </Main>
  </div>
);
