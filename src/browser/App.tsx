import React from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
import "normalize.css";
import "./App.css";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./global-state/store";

import StartApp from "./system/StartApp";

interface IProps {
  [key: string]: any;
}
const App: React.FC<IProps> = (props) => {
  return (
    <Provider store={store}>
      <StartApp />
    </Provider>
  );
};

export default App;
