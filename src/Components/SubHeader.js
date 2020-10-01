import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  position: --webkit-sticky;
  top: 0;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3vw;
  background-color: #ffffff;
  ${(props) => (props.children ? `height: auto;` : `height: 0;`)}
  transition: max-height 0.15s ease-out;
  z-index: 9999;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const More = styled.a`
  color: #595959;
`;

const SNLink = styled(NavLink)`
  position: relative;
  overflow: hidden;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #202020;
  display: flex;
  align-items: center;
  &:before {
    content: "";
    width: 30px;
    position: absolute;
    border-bottom: 4px solid #669beb;
    border-radius: 4px;
    bottom: 6px;
    right: 110%;
    transition: all 0.4s;
  }
  &:hover:before {
    right: 0;
  }
  &.current:before {
    right: 0;
    width: 100%;
  }
  &.current:hover:before {
    width: 30px;
    right: calc(100% - 30px);
  }
`;

const SubHeader = ({ list, left = false }) => (
  <Header
    style={
      left ? { justifyContent: "flex-start" } : { justifyContent: "flex-end" }
    }
  >
    {list.map((item) => (
      <SNLink to={item.path} activeClassName="current">
        {item.name}
      </SNLink>
    ))}
  </Header>
);

export default withRouter(SubHeader);
