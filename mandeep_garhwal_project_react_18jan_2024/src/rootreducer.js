import { combineReducers } from "redux";
import { favreducer } from "./reducers/favreducer";
import { Datareducer } from "./reducers/datareducer";

export const mainreducer = combineReducers({
                data : Datareducer, 
                favlist : favreducer
})