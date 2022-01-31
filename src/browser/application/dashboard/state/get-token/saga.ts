import { call, takeLatest, put, select } from "redux-saga/effects";

import { Token } from "./types";
import { GetTokenSuccess } from "./actions";
import { getToken } from "./api";

const getTokenSagaAsync = function* () {
  try {
    const token = yield getToken();
    yield token && put(GetTokenSuccess(token));
  } catch (e) {}
};

const getTokenSagaStart = function* () {
  yield takeLatest(Token.GET_TOKEN_START, getTokenSagaAsync);
};

export const getTokenSaga = function* () {
  yield call(getTokenSagaStart);
};
