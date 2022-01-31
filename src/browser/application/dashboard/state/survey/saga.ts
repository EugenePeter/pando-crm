import { call, takeLatest, put, select } from "redux-saga/effects";

import { SurveyTypes } from "./types";
import { GetSurveySuccess } from "./actions";
import { survey } from "./api";

const getSurveySagaAsync = function* () {
  const { client } = yield select((state: any) => state.grpcClientReducer);
  const { token } = yield select((state: any) => state.grpcToken);
  const params = {
    client,
    token,
  };
  try {
    const results = yield survey({ client, token });
    yield console.log("yeheey:", results);
    yield put(GetSurveySuccess(results));
  } catch (e) {}
};

const getSurveySagaStart = function* () {
  yield takeLatest(SurveyTypes.GET_SURVEYS_START, getSurveySagaAsync);
};

export const getSurveySaga = function* () {
  yield call(getSurveySagaStart);
};
