import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import SubHeader from "Components/SubHeader";

const MainHeader = styled.header`
  height: 60px;
  padding: 0 10vw;
  width: 100%;
  background-color: #669beb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SLink = ({ to, children }) => (
  <NavLink to={to} activeClassName="current">
    {children}
  </NavLink>
);

const Item = styled.div`
  font-size: 20px;
  font-weight: 400;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & a {
    z-index: 1;
    color: white;
    transition: all 0.3s;
  }
  & a.current {
    color: #669beb;
  }
  & a:not(.current) ~ div {
    height: 0;
  }
`;

const Bubble = styled.div`
  position: absolute;
  width: 128px;
  height: 55px;
  background-color: white;
  z-index: 0;
  transition: all 0.5s;
`;

const MainNav = styled.div`
  position: relative;
  display: flex;
  gap: 2vw;
  height: 100%;
`;

window.onhashchange = () => {
  // console.log(window.history);
  // console.log(window.location);
  // const bubble = document.querySelector(".bubble");
  // const current = document.querySelector(".current");
  // console.log(bubble);
  // console.log(current);
  // bubble.style.width = current.style.width;
  // console.log(current.style.width);
};

const Header = (props) => {
  return (
    <>
      {console.log(props)}
      <MainHeader>
        <Item>
          <Link to="/">BopyungHS</Link>
        </Item>
        <MainNav>
          <Item>
            <SLink to="/about">About</SLink>
            <Bubble style={{ bottom: 0 }} />
          </Item>
          <Item>
            <SLink to="/club">Clubs</SLink>
            <Bubble style={{ bottom: 0 }} />
          </Item>
          <Item>
            <SLink to="/search">Search</SLink>
            <Bubble style={{ bottom: 0 }} />
          </Item>
        </MainNav>
      </MainHeader>
      <SubHeader />
    </>
  );
};

export default withRouter(Header);
