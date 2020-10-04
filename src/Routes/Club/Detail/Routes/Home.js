import React from "react";
import styled from "styled-components";
import BgGradient from "Routes/Club/Detail/Components/BgGradient";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { clubsApi } from "fakeapi";

const Section = styled.section``;

const Main = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 80vh;
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
  width: 60vw;
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
  background-color: ${(props) => (props.color ? props.color : "#8395a7")};
  color: #f4f4f4;
  font-weight: bold;
`;

const MoreBtn = styled(Button)``;

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

export default ({ clubId, current }) => {
  const club = clubsApi.clubDetail(clubId);
  console.log(club);
  return (
    <>
      <BgGradient color={club.color} />
      <Section>
        <Main initial="out" animate="in" exit="out" variants={pageTransition}>
          <Logo>{club.name}</Logo>
          <Description>
            {club.description.split("\n").map((i) => (
              <p>{i}</p>
            ))}
          </Description>
          <BtnContainer>
            <Link>
              <JoinBtn color={club.color}>가입하기</JoinBtn>
            </Link>
            <Link to={current + "/about"}>
              <MoreBtn>더 알아보기</MoreBtn>
            </Link>
          </BtnContainer>
        </Main>
      </Section>
    </>
  );
};
