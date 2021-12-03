import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory, useLocation } from "react-router-dom";

import { CheckAuthorization } from "./start/state/check-auth";

import { Unauthorize } from "./start/components";

const StartApp = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const navigate = useHistory();
  const URL = useLocation().pathname;
  const {
    checkAuthReducer: { is_authenticated, done_checking_auth },
  } = state;

  useEffect(() => {
    dispatch(CheckAuthorization());
    console.log("is_authenticated", is_authenticated);
  }, []);

  useEffect(() => {
    // done_checking_auth && !is_authenticated && navigate.push("signin");
    !is_authenticated && navigate.push("signin");
  }, [done_checking_auth]);

  return <>{is_authenticated ? <h1>THIS IS THE DASHBOARD</h1> : <Unauthorize />}</>;
};

export default StartApp;
