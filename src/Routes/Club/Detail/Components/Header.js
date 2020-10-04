import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8vw;
  z-index: 99;
`;

const Logo = styled.div`
  height: 32px;
  font-size: 32px;
  line-height: 1;
`;

const NavList = styled.ul`
  display: flex;
  gap: 7vw;
  font-size: 24px;
  font-weight: 500;
  color: #202020;
`;

const GoBack = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;

  & a {
    display: block;
    width: 44px;
    height: 44px;
  }
`;

const SNLink = styled(NavLink)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &.present {
    font-weight: bold;
    /* &::after {
      content: "";
      width: 100%;
      height: 60px;
      background-color: #669beb;
      position: absolute;
      z-index: -1;
    } */
  }
`;

export default ({ logo, current }) => (
  <Header>
    <GoBack>
      <NavLink to="/club">
        <svg width="44" height="44" fill="none">
          <path
            d="M27.5 11L16.5 22L27.5 33"
            stroke="#202020"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NavLink>
    </GoBack>
    <NavLink to={current}>
      <Logo>MAKER</Logo>
    </NavLink>
    <NavList>
      <SNLink to={current + "/about"} activeClassName="present">
        About
      </SNLink>
      <SNLink to={current + "/contact"} activeClassName="present">
        Contact
      </SNLink>
      <SNLink to={current + "/activity"} activeClassName="present">
        Activity
      </SNLink>
    </NavList>
  </Header>
);
