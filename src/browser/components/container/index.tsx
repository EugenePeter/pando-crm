import React, { ReactChild, ReactChildren } from "react";
import styled from "styled-components";
import { ChildrenProps } from "../types";

const Container: React.FC<ChildrenProps> = (props) => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  border: 2px solid black;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
`;
