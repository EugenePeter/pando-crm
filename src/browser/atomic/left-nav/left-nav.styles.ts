import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledList = styled.li`
  list-style-type: none;
  .active {
    color: #04d997;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #747474;
  style: none;
  text-decoration: none;
  font-weight: 700;
`;

interface IChildrenItems {
  [key: string]: any;
}
interface StyledNavWithChildrenProps {
  children_items: IChildrenItems[];
}
export const StyledNavWithChildren = styled.h4<StyledNavWithChildrenProps>`
  color: #b3b3b3;
`;
