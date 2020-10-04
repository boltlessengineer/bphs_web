import React from "react";
import styled from "styled-components";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import ClubDetailHeader from "Routes/Club/Detail/Components/Header";
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

const Header = styled.div`
  position: relative;
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
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

const About = ({ match }) => (
  <>
    <Header />
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      About
    </motion.div>
  </>
);

const Contact = ({ match }) => (
  <>
    <Header />
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      Contact
    </motion.div>
  </>
);

const Activty = ({ match }) => (
  <>
    <Header />
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      Activty
    </motion.div>
  </>
);

/* match가 이상한, /club/creative/adsdf 같은거라면? */
export default ({ location, match }) => (
  <Container>
    <ClubDetailHeader current={match.url} />
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path={`${match.url}`} exact component={Home}></Route>
        <Route path={`${match.url}/about`} component={About}></Route>
        <Route path={`${match.url}/contact`} component={Contact}></Route>
        <Route path={`${match.url}/activity`} component={Activty}></Route>
      </Switch>
    </AnimatePresence>
  </Container>
);
