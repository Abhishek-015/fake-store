import { createStore , applyMiddleware , compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";

import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(userReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store


