import { ReactChild, ReactChildren } from "react";

export interface ChildrenProps {
  children?: ReactChild | ReactChildren | JSX.Element[] | JSX.Element;
}
