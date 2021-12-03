import { call, all } from "redux-saga/effects";

import { checkAuthSaga } from "../system/start/state/check-auth/saga";
import {loginSaga , loginSubmitSaga} from '../system/start/state/signin/saga'

export default function* () {
  yield all([call(checkAuthSaga), call(loginSaga), call(loginSubmitSaga)]);
}
