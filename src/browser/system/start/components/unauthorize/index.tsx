import React, {Suspense, lazy} from "react";
import { Switch, Route } from "react-router-dom";
// import { Signin, Signup } from "../index";
import { Modifiers } from "../../../../global-styles";
import { HeroSection, SignInSignUpSlot } from "../styles";

const Signin = lazy(() => import('../signin/index'))
const Signup = lazy(() => import('../signup/index'))
const Unauthorize = () => {
  return (
    <>
      <Modifiers />
      <HeroSection className="hero-section">
        <SignInSignUpSlot>
          <Switch>
            <Suspense fallback={<>..LOADING</>}>
              <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Suspense>
          </Switch>
        </SignInSignUpSlot>
      </HeroSection>
    </>
  );
};
export default Unauthorize;
