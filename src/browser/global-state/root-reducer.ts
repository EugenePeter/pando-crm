import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import {  } from "../system/start/state/check-auth";
import { checkAuthReducer } from "../system/start/state/check-auth";
import { loginReducer } from "../system/start/state/signin";

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: [],
// };

const rootReducer = combineReducers({
  checkAuthReducer,
  loginReducer,
});

export default rootReducer;
