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
  gap: 5vw;
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

export default ({ logo, match }) => (
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
    <NavLink to={match.url}>
      <Logo>MAKER</Logo>
    </NavLink>
    <NavList>
      <li>
        <NavLink to={match.url + "/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={match.url + "/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={match.url + "/projects"}>Projects</NavLink>
      </li>
    </NavList>
  </Header>
);
