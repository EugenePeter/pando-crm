import React from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
import "normalize.css";
import "./App.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./global-state/store";
import { BrowserRouter } from "react-router-dom";
import StartApp from "./system/StartApp";

interface IProps {
  [key: string]: any;
}
const App: React.FC<IProps> = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<h2>LOADING...</h2>} persistor={persistor}>
        <BrowserRouter>
          <StartApp />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
