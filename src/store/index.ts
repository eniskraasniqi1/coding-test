import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const config = {
  key: "root",
  storage: storage,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persisted = persistReducer(config, rootReducer);
const store = createStore(persisted, composeEnhancers(applyMiddleware(thunk)));

export default store;
