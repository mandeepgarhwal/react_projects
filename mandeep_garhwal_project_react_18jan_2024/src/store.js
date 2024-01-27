import {  createStore , applyMiddleware} from "redux"
import { mainreducer } from "./rootreducer"
import {thunk} from "redux-thunk"


export const Store = createStore(mainreducer, {}, applyMiddleware(thunk))
