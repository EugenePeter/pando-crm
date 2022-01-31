import { GetSurveysRequest } from "../../../../../grpcweb/pando/api/survey/v1/admin_pb";

export const survey = async ({ client, token }) => {
  const surveysRequest = new GetSurveysRequest();
  surveysRequest.setOrganizationCode("alliance");
  surveysRequest.setResultsPerPage(200);
  try {
    const response = await client.getSurveys(surveysRequest, {
      authorization: `Bearer ${token}`,
    });
    return response.toObject();
  } catch (e) {
    console.log("ERROR GETTING SURVEYS:", e);
  }
};
