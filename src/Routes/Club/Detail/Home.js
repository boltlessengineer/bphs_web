import React from "react";
import styled from "styled-components";
import BgGradient from "Routes/Club/Detail/Components/BgGradient";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section = styled.section``;

const Main = styled(motion.div)`
  position: relative;
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
      duration: 0.9,
    },
  },
  out: {
    opacity: 0,
    y: "-10%",
    transition: {
      duration: 0.5,
    },
  },
};

export default ({ club, match }) => (
  <>
    <BgGradient color="#669BEB" />
    <Section>
      <Main initial="out" animate="in" exit="out" variants={pageTransition}>
        <Logo>MAKER</Logo>
        <Description>
          {description.split("\n").map((i) => (
            <p>{i}</p>
          ))}
        </Description>
        <BtnContainer>
          <Link>
            <JoinBtn>가입하기</JoinBtn>
          </Link>
          <Link to={match.url + "/about"}>
            <MoreBtn>더 알아보기</MoreBtn>
          </Link>
        </BtnContainer>
      </Main>
    </Section>
  </>
);
