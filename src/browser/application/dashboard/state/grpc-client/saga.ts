import { call, takeLatest, put, select } from "redux-saga/effects";

import { InitializeGRPCclientTypes } from "./types";
import { InitializeGRPCclientSuccess } from "./actions";
import { grpcClient } from "./api";

const grpcClientConnectionAsync = function* () {
  const { token } = yield select((state: any) => state.grpcToken);
  try {
    const client = yield grpcClient(token, (result) => {});
    yield client && put(InitializeGRPCclientSuccess(client));
  } catch (e) {}
};

const grpcClientConnectionStart = function* () {
  yield takeLatest(
    InitializeGRPCclientTypes.INTIALIZE_GRPC_CLIENT_START,
    grpcClientConnectionAsync
  );
};

export const grpcClientConnectionSaga = function* () {
  yield call(grpcClientConnectionStart);
};
