import { combineReducers } from "redux";
import { postreducer } from "./postreducers";
import { counterreducer } from "./counterreducer";

export const reducers = combineReducers({
    posts: postreducer,
    counter : counterreducer
})