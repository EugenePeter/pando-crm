import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, MainPanel } from "../../components";
import { LeftNavigation } from "../../atomic";

import Survey from "./components/survey";

import { InitializeGRPCclientStart } from "./state/grpc-client/actions";
import { GetTokenStart } from "./state/get-token/actions";

const DashboardConsumer = () => {
  const dispatch = useDispatch();
  const grpcToken = useSelector(({ grpcToken }: any) => grpcToken.token);
  useEffect(() => {
    dispatch(GetTokenStart());
    grpcToken && dispatch(InitializeGRPCclientStart());
  }, [grpcToken]);
  return (
    <Container>
      <LeftNavigation />
      <MainPanel>
        <Switch>
          <Route exact path="/surveys">
            <Survey />
          </Route>
          <Route exact path="/documents">
            <h1>DOCUMENTS</h1>
          </Route>
        </Switch>
      </MainPanel>
    </Container>
  );
};

export default DashboardConsumer;
