import { combineReducers } from "redux";
import orderReducer from "../order/reducers";
import customerReducer from "../customer/reducers";
import productReducer from "../product/reducers";

export default combineReducers({
  orderReducer,
  customerReducer,
  productReducer,
});
