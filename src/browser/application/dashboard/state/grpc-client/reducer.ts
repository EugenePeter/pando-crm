import { InitializeGRPCclientTypes } from "./types";

export interface ISurveys {
  [index: string]: any;
}
export interface GRPCclientReducer {
  connecting_to_grpc_server: boolean;
  connected_to_grpc_server: boolean;
  connecting_to_grpc_server_failed: boolean;
  client: null | string;
  surveys?: ISurveys;
}

const INITIAL_STATE: GRPCclientReducer = {
  connecting_to_grpc_server: false,
  connected_to_grpc_server: false,
  connecting_to_grpc_server_failed: false,
  client: null,
  surveys: {},
};

export const grpcClientReducer = (
  state: GRPCclientReducer = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case InitializeGRPCclientTypes.INTIALIZE_GRPC_CLIENT_START:
      return {
        ...state,
        connecting_to_grpc_server: true,
      };
    case InitializeGRPCclientTypes.INTIALIZE_GRPC_CLIENT_SUCCESS:
      return {
        ...state,
        client: action.payload,
        connecting_to_grpc_server: false,
      };
    default:
      return state;
  }
};
