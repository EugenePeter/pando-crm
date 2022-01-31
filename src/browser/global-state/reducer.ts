import { checkAuthReducer } from "../system/start/state/check-auth";
import { loginReducer } from "../system/start/state/signin";
import {
  surveyReducer,
  grpcClientReducer,
  grpcToken,
} from "../application/dashboard/state";

export const reducers = {
  checkAuthReducer,
  loginReducer,
  grpcClientReducer,
  surveyReducer,
  grpcToken,
};
