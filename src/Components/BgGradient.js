import React from "react";
import styled from "styled-components";

import { motion, useViewportScroll, useTransform } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

const BgContainer = styled(motion.div)`
  transform-origin: top right;
  width: 120vw;
  min-width: 60vh;
  height: calc(100vh + 100vw);

  transform: translateX(75vw) rotate(23deg);
  & div {
    position: absolute;
    right: 0;
    /* transform-origin: bottom left; */
    height: 100%;
    background-color: ${(props) => props.color};
    mix-blend-mode: multiply;
  }
  & div:nth-child(1) {
    /* left: 0; */
    width: 100%;
    opacity: 10%;
  }
  & div:nth-child(2) {
    /* left: 106px; */
    width: calc(100% - 106px);
    opacity: 30%;
    transition: all 0.1s;
  }
  & div:nth-child(3) {
    /* left: 171px; */
    width: calc(100% - 171px);
    opacity: 50%;
    transition: all 0.2s;
  }
  & div:nth-child(4) {
    /* left: 206px; */
    width: calc(100% - 206px);
    opacity: 40%;
    transition: all 0.3s;
  }
  & div:nth-child(5) {
    /* left: 220px; */
    width: calc(100% - 220px);
    opacity: 60%;
    transition: all 0.4s;
  }
`;

export default ({ color }) => {
  const { scrollYProgress } = useViewportScroll();
  const rotateScale = useTransform(scrollYProgress, (y) => y * 23);
  const moveScale = useTransform(scrollYProgress, (y) => y * 1000);
  return (
    <Container>
      <BgContainer color={color} className="gradientBg">
        <motion.div style={{ rotate: rotateScale, x: moveScale }} />
        <motion.div style={{ rotate: rotateScale, x: moveScale }} />
        <motion.div style={{ rotate: rotateScale, x: moveScale }} />
        <motion.div style={{ rotate: rotateScale, x: moveScale }} />
        <motion.div style={{ rotate: rotateScale, x: moveScale }} />
      </BgContainer>
    </Container>
  );
};
