import React from "react";
import { Link, withRouter } from "react-router-dom";
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

const MainNav = styled.div`
  display: flex;
  gap: 2vw;
`;

const Item = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

const SLink = styled(Link)``;

const Header = ({ location: { pathname } }) => (
  <>
    <MainHeader>
      <Item>
        <SLink to="/">BopyungHS</SLink>
      </Item>
      <MainNav>
        <Item>
          <SLink to="/about">About</SLink>
        </Item>
        <Item>
          <SLink to="/club">Clubs</SLink>
        </Item>
        <Item>
          <SLink to="/search">Search</SLink>
        </Item>
      </MainNav>
    </MainHeader>
    <SubHeader />
  </>
);

export default withRouter(Header);
