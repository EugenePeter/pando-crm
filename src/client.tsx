import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store, persistor } from "./browser/global-state/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./browser/App";

hydrate(
  <ThemeProvider theme={{}}>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </ThemeProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
