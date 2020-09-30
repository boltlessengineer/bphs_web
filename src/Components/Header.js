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
    line-height: 40px;
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
  overflow: visible;
  z-index: 0;
  transition: all 0.3s ease;
  background-image: url("/assets/bubble2.svg");
  background-size: 128px auto;
`;

const MainNav = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 230px;
  height: 100%;
`;

const Header = () => {
  return (
    <>
      <MainHeader>
        <Item>
          <Link to="/">BopyungHS</Link>
        </Item>
        <MainNav>
          <Item>
            <SLink to="/about">About</SLink>
            <Bubble style={{ top: 0, transform: "rotate(180deg)" }} />
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
