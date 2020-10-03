import React from "react";
import styled from "styled-components";
import BgGradient from "Components/BgGradient";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 90vh;
  padding: 0 8vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  /* background-color: rgba(200, 200, 200, 0.5); */
`;

const Logo = styled.div`
  height: 100px;
  font-size: 100px;
  line-height: 1;
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
  font-size: 24px;
  color: #202020;
  font-weight: 500;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  padding: 8px 16px;
  cursor: pointer;
`;

const JoinBtn = styled(Button)`
  background-color: #669beb;
  color: #f4f4f4;
  font-weight: bold;
`;

const MoreBtn = styled(Button)``;

const description =
  "메이커 동아리는 코딩, 모델링, 3d 프린팅을 포함한\n복합적인 maker 활동을 하는 동아리입니다.";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.5,
      duration: 1,
    },
  },
  out: {
    opacity: 0,
    y: "-20%",
    transition: {
      duration: 1,
    },
  },
};

export default () => (
  <>
    <BgGradient color="#669BEB" />
    <Section initial="out" animate="in" exit="out" variants={pageTransition}>
      <Main>
        <Logo>MAKER</Logo>
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
    </Section>
  </>
);
