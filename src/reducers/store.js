import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import bookReducer from "./books";
import filteReducer from "./filter";

import thunkMiddleware from "redux-thunk";
import cartReducer from "./cart";

let reducers = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  filter: filteReducer,
});
let store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));

store.subscribe(() => console.log(store.getState()));
export default store;
