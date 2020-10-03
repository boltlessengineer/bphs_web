import React from "react";
import styled from "styled-components";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import ClubDetailHeader from "Components/ClubDetailHeader";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  z-index: 10;
`;

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};

const Header = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #4370db;
`;

const About = () => (
  <>
    <Header />
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      About
    </motion.div>
  </>
);

const Contact = () => (
  <>
    <Header />
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      Contact
    </motion.div>
  </>
);

export default ({ location, match }) => (
  <Container>
    <ClubDetailHeader match={match} />
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path={`${match.url}/`} exact component={Home} />
        <Route path={`${match.url}/about`} component={About} />
        <Route path={`${match.url}/contact`} component={Contact} />
        <Route path={`${match.url}/projects`} component={() => "projects"} />
      </Switch>
    </AnimatePresence>
  </Container>
);
