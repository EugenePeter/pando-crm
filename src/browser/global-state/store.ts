import { createStore, applyMiddleware, Middleware } from "redux";
// import { persistStore} from 'redux-persist';
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { rootSaga } from "./index";

const sagaMiddleware: Middleware | any = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(rootSaga);
sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
export default { store };
