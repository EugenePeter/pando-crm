import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { StyledSignInSignUp, SignInSignUpWrapper, StyledLink } from "../styles";
import { Modifiers } from "../../../../global-styles";
import { HandleLoginFieldChange, LoginUserActionStart } from "../../state/signin";

import { fields } from "./fields";
import { CleverButton, FormInput, Loader } from "../../../../components";
import { useDebounce } from "../../../../utils";

const Signin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { submitting, has_pending_changes } = state;
  console.log("READING STATE:", state);

  const field_value_ref = useRef(null);

  const actionsProp: any = {
    handleChange: (data: any) => {
      const { name, value } = data;
      dispatch(HandleLoginFieldChange({ [name]: value, name }));
    },
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(LoginUserActionStart());
  };

  const data = useDebounce({
    input: field_value_ref.current,
    delay: 200,
  });

  useEffect(() => {
    data && console.log("data:", data);
    data && dispatch(HandleLoginFieldChange(data));
  }, [data]);

  return (
    <>
      <Modifiers />
      <StyledSignInSignUp onSubmit={handleSubmit} className="styled-sigin-signup">
        <SignInSignUpWrapper>
          {submitting ? (
            <>
              <Loader />
              <p>just a moment</p>
            </>
          ) : (
            <h4 style={{width: '100%', textAlign: 'center'}}>sign in</h4>
          )}
          {fields &&
            Object.entries(fields).map(([key, value], index: number) => (
              <FormInput
                key={`key--${index}`}
                value={state[key] ?? ""}
                type="text"
                placeholder={value.place_holder}
                label={value.label}
                actions={actionsProp ?? {}}
                name={value.name}
                accessor="value"
                disabled={submitting}
              />
            ))}
          <CleverButton
            full_width={true}
            button_type="signin"
            disabled={submitting || !has_pending_changes ? true : false}
          >
            login
          </CleverButton>
          <StyledLink to="/signup" className="margin--top">
            <small>I don't have an account yet, sign me up</small>
          </StyledLink>
        </SignInSignUpWrapper>
      </StyledSignInSignUp>
    </>
  );
};
export default Signin;
