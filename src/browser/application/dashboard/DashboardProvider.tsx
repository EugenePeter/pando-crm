import React, { createContext, useEffect, useState } from "react";
import { useClever } from "./machine/record-machine";
export const DashboardState = createContext<any | null>(null);
export const DashboardActions = createContext<any | null>(null);

export interface data {
  value: string;
  name?: string;
  secondary_name?: string;
}
interface AddVacanciesActions {}

const DashboardProvider: React.FC<any> = (props) => {
  const { children } = props;
  //   const [state, send] = useClever({
  //     message: "hello",
  //   });

  //   console.log("testService:", state);
  const actionsProp: AddVacanciesActions = {};
  return (
    <>
      <DashboardState.Provider value={{}}>
        <DashboardActions.Provider value={{}}>
          {children}
        </DashboardActions.Provider>
      </DashboardState.Provider>
    </>
  );
};

export default DashboardProvider;
