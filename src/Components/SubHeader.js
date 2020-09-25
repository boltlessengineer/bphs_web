import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  height: 50px;
  padding: 0 7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 3vw;
`;

const Item = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: #202020;
`;

const SLink = styled(Link)``;

const More = styled.a`
  color: #595959;
`;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/notice">공지사항</SLink>
      </Item>
      <Item>
        <SLink to="/ajgh">가정통신문</SLink>
      </Item>
      <Item>
        <SLink to="/events">대회/행사</SLink>
      </Item>
      <Item>
        <SLink to="/forest">대나무숲</SLink>
      </Item>
      <Item>
        <More>더보기</More>
      </Item>
    </List>
  </Header>
);
