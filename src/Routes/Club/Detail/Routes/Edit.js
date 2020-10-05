import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "scripts/editorTools";

const Section = styled(motion.section)`
  padding: 4vh 8vw 0;
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

export default () => (
  <Section initial="out" animate="in" exit="exit" variants={pageTransition}>
    <EditorJs tools={EDITOR_JS_TOOLS} />
  </Section>
);
