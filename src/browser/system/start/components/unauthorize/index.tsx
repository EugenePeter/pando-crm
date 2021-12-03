import React from "react";
import { Switch, Route } from "react-router-dom";
import { Signin, Signup } from "../index";
import { Modifiers } from "../../../../global-styles";
import { HeroSection, SignInSignUpSlot } from "../styles";

const Unauthorize = () => {
  return (
    <>
      <Modifiers />
      <HeroSection className="hero-section">
        <SignInSignUpSlot>
          <Switch>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </SignInSignUpSlot>
      </HeroSection>
    </>
  );
};
export default Unauthorize;
