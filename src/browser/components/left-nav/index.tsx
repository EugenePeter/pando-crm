import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "../types";
const LeftNav: React.FC<ChildrenProps> = (props) => {
  const { children } = props;
  return <StyledLeftNav>{children}</StyledLeftNav>;
};

export default LeftNav;

export const StyledLeftNav = styled.div`
  border: 2px solid black;
  box-sizing: border-box;
  height: 100%;
  width: 16%;
`;
