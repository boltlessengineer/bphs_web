import React from "react";
import styled from "styled-components";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Activity from "./Routes/Activity";
import { Switch, Route } from "react-router-dom";
import ClubDetailHeader from "./Components/Header";
import { AnimatePresence } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  z-index: 10;
  padding-top: 60px;
`;

const HeaderBg = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 10;
`;

/* match가 이상한, /club/creative/adsdf 같은거라면? */
export default ({ location, match }) => {
  const clubId = match.params.clubId;
  return (
    <Container>
      <ClubDetailHeader current={match.url} clubId={clubId}/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path={`${match.url}`} exact>
            <Home current={match.url} clubId={clubId} />
          </Route>
          <Route path={`${match.url}/about`}>
            <HeaderBg />
            <About clubId={clubId} />
          </Route>
          <Route path={`${match.url}/contact`}>
            <HeaderBg />
            <Contact clubId={clubId} />
          </Route>
          <Route path={`${match.url}/activity`}>
            <HeaderBg />
            <Activity clubId={clubId} />
          </Route>
        </Switch>
      </AnimatePresence>
    </Container>
  );
};
