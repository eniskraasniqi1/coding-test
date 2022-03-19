import { createStore, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const config = {
  key: "root",
  storage: storage,
};

const persisted = persistReducer(config, rootReducer);
const store = createStore(persisted, applyMiddleware(thunk));

export default store;
