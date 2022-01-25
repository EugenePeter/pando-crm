import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, MainPanel } from "../../components";
import { LeftNavigation } from "../../atomic";

import Client from "./client";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <LeftNavigation />
      <MainPanel>
        <Client />
        <h1>MAIN PANEL</h1>
      </MainPanel>
    </Container>
  );
};

export default Dashboard;
