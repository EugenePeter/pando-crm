import { call, all } from "redux-saga/effects";

import { checkAuthSaga } from "../system/start/state/check-auth/saga";

export default function* () {
  yield all([call(checkAuthSaga)]);
}
