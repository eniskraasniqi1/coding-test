import {
  ADD_PRODUCT,
  REMOVE_ORDER,
  GET_ALL_ORDERS,
  REMOVE_PRODUCT,
} from "../actionTypes";

const initialState: any = {
  orders: [],
  fetched: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
        fetched: true,
      };
    case REMOVE_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        orders: action.payload,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
