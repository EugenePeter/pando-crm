import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import test from "redux-persist/lib/storage/session";
// import { persistStore, persistCombineReducers } from "redux-persist";
// import { CookieStorage } from "redux-persist-cookie-storage";
// import { CookieStorage } from "../utils/persist-cookie-storage.ts";
// import Cookies from "cookies-js";

import { reducers } from "./reducer";

// import {  } from "../system/start/state/check-auth";
import { checkAuthReducer } from "../system/start/state/check-auth";
import { loginReducer } from "../system/start/state/signin";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['checkAuthReducer',"loginReducer"],
};

const rootReducer = combineReducers(reducers);
export default persistReducer(persistConfig, rootReducer);

// const rootReducer = combineReducers({
//   checkAuthReducer,
//   loginReducer,
// });

// export default rootReducer;
