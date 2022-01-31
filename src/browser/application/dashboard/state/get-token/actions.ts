import { Token } from "./types";

export const GetTokenStart = () => ({ type: Token.GET_TOKEN_START });
export const GetTokenSuccess = (value) => ({
  type: Token.GET_TOKEN_SUCCESS,
  payload: value,
});
export const GetTokenFailure = () => ({ type: Token.GET_TOKEN_FAILURE });
