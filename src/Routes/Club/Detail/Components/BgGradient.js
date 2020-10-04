import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Gradient = styled(motion.div)``;

const Gradients = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  /* z-index: -1; */
  overflow: hidden;
  & ${Gradient} {
    position: absolute;
    width: 120vw;
    min-width: 60vh;
    height: calc(100vh + 100vw);
    bottom: 0;
    transform-origin: bottom left;
    background-color: ${(props) => (props.color ? props.color : "#8395a7")};
    mix-blend-mode: multiply;
    transition: all 1.5s;
  }
  & ${Gradient}:nth-child(1) {
    left: 0;
    width: 100%;
    opacity: 10%;
  }
  & ${Gradient}:nth-child(2) {
    left: 106px;
    width: calc(100% - 106px);
    opacity: 30%;
  }
  & ${Gradient}:nth-child(3) {
    left: 171px;
    width: calc(100% - 171px);
    opacity: 50%;
  }
  & ${Gradient}:nth-child(4) {
    left: 206px;
    width: calc(100% - 206px);
    opacity: 40%;
  }
  & ${Gradient}:nth-child(5) {
    left: 220px;
    width: calc(100% - 220px);
    opacity: 60%;
  }
`;

const container = {
  hidden: {
    height: "0px",
    transition: {
      delay: 2.3,
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  show: {
    height: "100vh",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: {
    rotate: 0,
    scaleX: 2,
    marginLeft: "-400px",
  },
  show: {
    rotate: 23,
    scaleX: 1,
    marginLeft: "35vw",
  },
};

export default ({ color }) => {
  return (
    <Gradients
      color={color}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Gradient variants={item} />
      <Gradient variants={item} />
      <Gradient variants={item} />
      <Gradient variants={item} />
      <Gradient variants={item} />
    </Gradients>
  );
};
