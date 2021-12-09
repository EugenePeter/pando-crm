import { IFields } from "./types";

export const fields: IFields = {
  email: {
    label: "email",
    required: true,
    place_holder: "enter email",
    name: "email",
    field_type: "text"
  },
  password: {
    label: "password",
    required: true,
    place_holder: "enter password",
    name: "password",
    field_type: "password"
  },
};
