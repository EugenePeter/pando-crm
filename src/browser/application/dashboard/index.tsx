import React, { useEffect, Profiler } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, MainPanel } from "../../components";
import { LeftNavigation } from "../../atomic";

import Client from "./client";

import { InitializeGRPCclientStart } from "./state/grpc-client/actions";
import { GetTokenStart } from "./state/get-token/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const grpcToken = useSelector(({ grpcToken }: any) => grpcToken.token);
  useEffect(() => {
    !grpcToken
      ? dispatch(GetTokenStart())
      : dispatch(InitializeGRPCclientStart());
  }, [grpcToken]);

  return (
    <Container>
      <LeftNavigation />
      <MainPanel>
        <Switch>
          <Route exact path="/surveys">
            <Profiler
              id="Client"
              onRender={(id, phase, actualDuration) => {
                console.log(
                  "CHECKING RENDERS OF CLIENT",
                  id,
                  phase,
                  actualDuration
                );
              }}
            >
              <Client />
            </Profiler>
          </Route>
          <Route exact path="/documents">
            <h1>DOCUMENTS</h1>
          </Route>
        </Switch>
      </MainPanel>
    </Container>
  );
};

export default React.memo(Dashboard);
