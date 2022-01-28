import { InitializeGRPCclientTypes } from "./types";

export const InitializeGRPCclientStart = () => ({
  type: InitializeGRPCclientTypes.INTIALIZE_GRPC_CLIENT_START,
});

export const InitializeGRPCclientSuccess = (value) => {
  return {
    type: InitializeGRPCclientTypes.INTIALIZE_GRPC_CLIENT_SUCCESS,
    payload: value,
  };
};
