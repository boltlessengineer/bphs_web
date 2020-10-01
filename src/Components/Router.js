import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import About from "Routes/About";
import CreativeClub from "Routes/Club/Creative";
import FSClub from "Routes/Club/Freestanding";
// import Search from "Routes/Search";
import Header from "Components/Header";
import SubHeader from "Components/SubHeader";
import NotFound from "Routes/NotFound";
import NotReady from "Routes/NotReady";

const SHdic = {
  home: [
    { name: "공지사항", path: "/home/notice" },
    { name: "가정통신문", path: "/home/news" },
    { name: "대회/행사", path: "/home/events" },
    { name: "대나무숲", path: "/home/forest" },
    { name: "더보기", path: "/home/more" },
  ],
  club: [
    { name: "창체동아리", path: "/club/creative" },
    { name: "자율동아리", path: "/club/freestanding" },
    { name: "동아리 가입하기", path: "/club/join" },
  ],
};

export default () => (
  <Router>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home">
        <SubHeader list={SHdic.home} left />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="*" component={NotReady} />
        </Switch>
      </Route>
      <Route path="/about" component={NotReady} />
      <Route path="/club">
        <SubHeader list={SHdic.club} />
        <Switch>
          <Redirect exact from="/club" to="/club/creative" />
          <Route path="/club/creative" exact component={CreativeClub} />
          <Route path="/club/freestanding" exact component={FSClub} />
          <Route path="/club/join" exact component={NotReady} />
          <Route path="*" component={NotReady} />
        </Switch>
      </Route>
      <Route path="/search" component={NotReady} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
