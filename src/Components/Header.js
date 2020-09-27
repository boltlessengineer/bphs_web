import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  height: 60px;
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #669beb;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.div`
  display: flex;
  gap: 2vw;
`;

const Item = styled.li`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

const SLink = styled(Link)``;

const HeaderComponent = ({ location: { pathname } }) => (
  <Header>
    <List>
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
    </List>
    {/* 여기에 위치 확인하고 subNav 만드는 switch문 추가
    (아니면 SubHeader에서 그 작업을..?) */}
  </Header>
);

export default withRouter(HeaderComponent);
