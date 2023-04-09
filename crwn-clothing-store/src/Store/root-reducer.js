import { combineReducers } from "redux";
import { userReducer } from "./user-reducer/user-reducer";
export const rootReducer = combineReducers({
  user: userReducer,
});
