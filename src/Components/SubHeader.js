import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const headerDic = {
  main: [
    { name: "공지사항", path: "/notice" },
    { name: "가정통신문", path: "/news" },
    { name: "대회/행사", path: "/events" },
    { name: "대나무숲", path: "/forest" },
    { name: "더보기", path: "" },
  ],
  club: [
    { name: "창체동아리", path: "creative" },
    { name: "자율동아리", path: "freestanding" },
    { name: "동아리 가입하기", path: "join" },
  ],
};

const Header = styled.ul`
  position: sticky;
  position: --webkit-sticky;
  top: 0;
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3vw;
  background-color: #ffffff;
  ${(props) => (props.children ? `height: auto;` : `height: 0;`)}
  transition: max-height 0.15s ease-out;
  overflow: hidden;
`;

const Item = styled.li`
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #202020;
  display: flex;
  align-items: center;
`;

const SLink = styled(Link)``;

const More = styled.a`
  color: #595959;
`;

const SubHeader = ({ location: { pathname } }) => (
  <Header>
    <div
      style={{
        position: "sticky",
        width: "10px",
        height: "5px",
        background: "red",
        top: 0,
      }}
    />
    {headerDic[pathname.split("/")[1] || "main"] &&
      headerDic[pathname.split("/")[1] || "main"].map((item) => (
        <Item>
          <SLink to={item.path}>{item.name}</SLink>
        </Item>
      ))}
  </Header>
);

export default withRouter(SubHeader);
