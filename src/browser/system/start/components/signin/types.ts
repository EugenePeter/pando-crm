export interface IFields {
  email: {
    label: string;
    required: true;
    place_holder: string;
    name: string;
    field_type?: "text";
  };
  password: {
    label: string;
    required: true;
    place_holder: string;
    name: string;
    field_type?: "text";
  };
}
