import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "scripts/editorTools";
// import "Styles/postStyle.scss";

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

const data = {
  time: 1556098174501,
  blocks: [
    {
      type: "header",
      data: {
        text: "About",
        level: 1,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "자신의 동아리를 소개해보세요!",
      },
    },
  ],
};

const Hi = () => {
  const editorJsRef = React.useRef(null);
  const handleSave = React.useCallback(async () => {
    const savedData = await editorJsRef.current.save();

    console.log("data", savedData);
  }, []);
  return (
    <Section initial="out" animate="in" exit="exit" variants={pageTransition}>
      <div className="dontReset">
        <button onClick={handleSave}>Save</button>
        <EditorJs
          instanceRef={(instance) => (editorJsRef.current = instance)}
          data={data}
          tools={EDITOR_JS_TOOLS}
        />
      </div>
    </Section>
  );
};

export default Hi;
