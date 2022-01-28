import { call, takeLatest, put, select } from "redux-saga/effects";

import { SurveyTypes } from "./types";
import { GetSurveySuccess } from "./actions";
import { survey } from "./api";

const getSurveySagaAsync = function* () {
  const { client } = yield select((state: any) => state.grpcClientReducer);
  console.log("NAAY CLIENT:", client);
  try {
    yield survey(client, (survey) => {
      console.log("SURVEY SURVEY RESULTS:", survey);
      put(GetSurveySuccess(survey));
    });
  } catch (e) {}
};

const getSurveySagaStart = function* () {
  yield takeLatest(SurveyTypes.GET_SURVEYS_START, getSurveySagaAsync);
};

export const getSurveySaga = function* () {
  yield call(getSurveySagaStart);
};
