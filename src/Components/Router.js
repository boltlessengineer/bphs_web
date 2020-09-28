import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "Routes/Home";
// import About from "Routes/About";
import Club from "Routes/Club";
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
        <Route path="/club" component={Club} />
        {/* <Route path="/search" component={Search} /> */}
        <Route component={NotFound} />
      </Switch>
    </>
  </Router>
);
