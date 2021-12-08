import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory, useLocation, Switch } from "react-router-dom";
import { CheckAuthorization } from "./start/state/check-auth";
import { Unauthorize } from "./start/components";
import { Dashboard } from "../application/";

const StartApp = () => {
  const state = useSelector((state: any) => state);
  const { loginReducer } = state!;
  const { token, successfuly_signedin } = loginReducer?.user_data!;
  const dispatch = useDispatch();
  const navigate = useHistory();
  const URL = useLocation().pathname;
  const {
    checkAuthReducer: { is_authenticated, done_checking_auth },
  } = state;

  console.log("STATE:", state);

  useEffect(() => {
    dispatch(CheckAuthorization());
    console.log("is_authenticated", is_authenticated);
  }, []);

  useEffect(() => {
    const route = !is_authenticated && !token && !successfuly_signedin ? "/signin" : "/";
    navigate.push(route);
  }, [done_checking_auth, is_authenticated]);

  useEffect(() => {
    if (token && successfuly_signedin) {
      navigate.push("/");
      dispatch(CheckAuthorization());
    }
  }, [token, successfuly_signedin]);

  return (
    <>
      <Switch>
        <Route path="/">{!is_authenticated ? <Unauthorize /> : <Dashboard />}</Route>
      </Switch>
    </>
  );
};

export default StartApp;
