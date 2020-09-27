import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import About from "Routes/About";
import Club from "Routes/Club";
import Search from "Routes/Search";
import Header from "./Header";
import SubHeader from "./SubHeader";

export default () => (
  <Router>
    <>
      <Header />
      <SubHeader />
      <div id="wrapper">
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/club" component={Club} />
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </>
  </Router>
);
