import { AuthTypes } from "./types";

export const CheckAuthorization = () => ({
  type: AuthTypes.CHECK_AUTH_START,
});

export const AuthorizeUser = (value: any) => ({
  type: AuthTypes.CHECK_AUTH_SUCCESS,
  payload: value,
});

export const UnauthorizeUser = (value) => ({
  type: AuthTypes.UNAUTHORIZED_USER,
  payload: value,
});
