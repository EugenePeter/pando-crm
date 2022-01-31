import { Token } from "./types";

export interface SurveyReducer {
  getting_token: boolean;
  getting_token_success: boolean;
  getting_token_failure: boolean;
  token: null | string;
}

const INITIAL_STATE: SurveyReducer = {
  getting_token: false,
  getting_token_success: false,
  getting_token_failure: false,
  token: null,
};

export const grpcToken = (
  state: SurveyReducer = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case Token.GET_TOKEN_START:
      return {
        ...state,
        getting_token: true,
      };
    case Token.GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        getting_token: false,
        getting_token_success: true,
      };
    default:
      return state;
  }
};
