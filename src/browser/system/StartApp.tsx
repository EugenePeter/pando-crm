import React, { useEffect, Suspense, lazy, Profiler } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory, Switch } from "react-router-dom";
import { CheckAuthorization } from "./start/state/check-auth";

const Dashboard = lazy(() => import("../application/dashboard"));
const Unauthorize = lazy(() => import("./start/components/unauthorize"));

import { LoaderCircle } from "../components";

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
    // dispatch(CheckAuthorization());
    const route =
      !is_authenticated && !token && !successfuly_signedin ? "/signin" : "/";
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
        <Suspense fallback={<LoaderCircle />}>
          <Route path="/">
            {!is_authenticated ? (
              <Unauthorize />
            ) : (
              <Profiler
                id="dashboard"
                onRender={(id, phase, actualDuration) =>
                  console.log(
                    "CHECKING RENDER OF PARENT DASHBOARD",
                    id,
                    phase,
                    actualDuration
                  )
                }
              >
                <Dashboard />
              </Profiler>
            )}
          </Route>
        </Suspense>
      </Switch>
    </>
  );
};

export default StartApp;
