import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import userReducer from "../reducers/userReducer";
const store = legacy_createStore(userReducer, applyMiddleware(logger));

export default store;
