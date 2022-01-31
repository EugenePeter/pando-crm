import React from "react";

import DashboardConsumer from "./DashboardConsumer";
import DashboardProvider from "./DashboardProvider";

const Dashboard: React.FC<any> = (props) => {
  const { ...rest } = props;
  return (
    <DashboardProvider {...rest}>
      <DashboardConsumer {...rest} />
    </DashboardProvider>
  );
};

export default Dashboard;
