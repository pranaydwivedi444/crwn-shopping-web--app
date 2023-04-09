import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
const middleWares = [logger];
const composedEhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEhancers);
