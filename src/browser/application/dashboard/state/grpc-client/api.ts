import { SurveyAdminServiceClient } from "../../../../../grpcweb/pando/api/survey/v1/AdminServiceClientPb";

export const grpcClient = (token: string, callback) => {
  console.log("I AM RUNNING THIS NUMBER OF TIMES GRPC CLIENT");

  const client =
    token && new SurveyAdminServiceClient("https://staging.pandolink.com:443");
  return client && client;
};
