import { call, all } from "redux-saga/effects";

import { checkAuthSaga } from "../system/start/state/check-auth/saga";
import { loginSaga, loginSubmitSaga } from "../system/start/state/signin/saga";
import { grpcClientConnectionSaga } from "../application/dashboard/state/grpc-client/saga";
import { getSurveySaga } from "../application/dashboard/state/survey";

export default function* () {
  yield all([
    call(checkAuthSaga),
    call(loginSaga),
    call(loginSubmitSaga),
    call(grpcClientConnectionSaga),
    call(getSurveySaga),
  ]);
}
