import { response } from "express";
import { call } from "redux-saga/effects";
import { SurveyAdminServiceClient } from "../../../../../grpcweb/pando/api/survey/v1/AdminServiceClientPb";
import { GetSurveysRequest } from "../../../../../grpcweb/pando/api/survey/v1/admin_pb";
import { SurveyDetailList } from "../../../../../grpcweb/pando/api/survey/v1/shared_pb";

export const grpcClient = (token: string, callback) => {
  const client =
    token && new SurveyAdminServiceClient("https://staging.pandolink.com:443");

  return client && client;
  const surveysRequest = new GetSurveysRequest();
  surveysRequest.setOrganizationCode("alliance");
  surveysRequest.setResultsPerPage(2);
  client.getSurveys(
    surveysRequest,
    {
      authorization: `Bearer ${token}`,
    },
    (err, response: SurveyDetailList) => {
      if (err) {
        console.error("GETTING SURVEY ERROR:", err);
        return;
      }
      response && callback(response.toObject());
    }
  );
};
