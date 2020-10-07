import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  padding: 4vh 10vw 0;
`;

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "30px",
  },
  exit: {
    opacity: 0,
    y: 0,
  },
};

export default ({ club }) => (
  <Section initial="out" animate="in" exit="exit" variants={pageTransition}>
    <h1>About</h1>
  </Section>
);
