import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "../types";
const MainPanel: React.FC<ChildrenProps> = (props) => {
  const { children } = props;
  return <StyledMainPanel>{children}</StyledMainPanel>;
};

export default MainPanel;

export const StyledMainPanel = styled.div`
  border: 2px solid black;
  box-sizing: border-box;
  height: 100%;
  width: 84%;
`;
