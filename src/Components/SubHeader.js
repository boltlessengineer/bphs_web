import React from "react";
import { Link, withRouter } from "react-router-dom";
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
  /* overflow: hidden; */
`;

const Item = styled.div`
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

const SubHeader = ({ list, left = false }) => (
  <Header
    style={
      left ? { justifyContent: "flex-start" } : { justifyContent: "flex-end" }
    }
  >
    {list.map((item) => (
      <Item>
        <SLink to={item.path}>{item.name}</SLink>
      </Item>
    ))}
  </Header>
);

export default withRouter(SubHeader);
