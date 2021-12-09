import React, { useEffect, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory, Switch } from "react-router-dom";
import { CheckAuthorization } from "./start/state/check-auth";
// import { Unauthorize } from "./start/components";
// import { Dashboard } from "../application/";

const Dashboard = lazy(() => import('../application/dashboard'))
const Unauthorize = lazy(() => import('./start/components/unauthorize'))

const StartApp = () => {
  const state = useSelector((state: any) => state);
  const { loginReducer } = state!;
  const { token, successfuly_signedin } = loginReducer?.user_data!;
  const dispatch = useDispatch();
  const navigate = useHistory();
  const {
    checkAuthReducer: { is_authenticated },
  } = state;

  useEffect(() => {
    !is_authenticated && dispatch(CheckAuthorization());
    const route = !is_authenticated && !token && !successfuly_signedin ? "/signin" : "/";
    navigate.push(route);
  }, [is_authenticated]);

  useEffect(() => {
    if (token && successfuly_signedin) {
      navigate.push("/");
      !is_authenticated && dispatch(CheckAuthorization());
    }
  }, [token, successfuly_signedin]);

  return (
    <>
      <Switch>
        <Suspense fallback={<>...LOAIDING</>}>
          <Route path="/">{!is_authenticated ? <Unauthorize /> : <Dashboard />}</Route>
        </Suspense>
      </Switch>
    </>
  );
};

export default StartApp;
