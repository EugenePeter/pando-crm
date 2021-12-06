import { takeLatest, put, call } from "redux-saga/effects";
import { AuthTypes } from "./types";
import { AuthorizeUser, UnauthorizeUser } from "./actions";
import { checkAuthorization } from "./api";

export const authorizedUser = function* (isAuthorize) {
  yield put(AuthorizeUser(isAuthorize));
};

export const unAuthorizedUser = function* (isAuthorize) {
  yield put(UnauthorizeUser(isAuthorize));
};

export const checkAuthAsync = function* () {
  try {
    const response = yield checkAuthorization();
    const { isAuthorize } = response;
    isAuthorize ? yield authorizedUser(isAuthorize) : yield unAuthorizedUser(isAuthorize);
  } catch (error) {}
};

export const checkAuthStart = function* () {
  yield takeLatest(AuthTypes.CHECK_AUTH_START, checkAuthAsync);
};

export const checkAuthSaga = function* () {
  yield call(checkAuthStart);
};
