import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
// import About from "Routes/About";
import CreativeClub from "Routes/Club/Creative";
import FSClub from "Routes/Club/Freestanding";
// import Search from "Routes/Search";
import Header from "Components/Header";
import NotFound from "Routes/NotFound";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Redirect path="/club" exact to="/club/creative" />
        <Route path="/club/creative" exact component={CreativeClub} />
        <Route path="/club/freestanding" exact component={FSClub} />
        {/* <Route path="/club/join" exact component={() => "join to..."} /> */}
        {/* <Route path="/search" component={Search} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  </Router>
);
