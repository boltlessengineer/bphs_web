import React from "react";
import styled from "styled-components";
import Main from "./DetailPresenter";
import { Switch, Route } from "react-router-dom";
import ClubDetailHeader from "Components/ClubDetailHeader";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 60px;
  width: 100vw;
  background-color: #f4f4f4;
  z-index: 9;
`;

export default ({ match }) => (
  <Container>
    <ClubDetailHeader match={match} />
    <Switch>
      <Route path={`${match.url}/`} exact component={Main} />
      <Route path={`${match.url}/about`} component={() => "about"} />
      <Route path={`${match.url}/contact`} component={() => "contact"} />
      <Route path={`${match.url}/projects`} component={() => "projects"} />
    </Switch>
  </Container>
);
