import {
  ADD_ORDER,
  ADD_ORDER_ITEM,
  REMOVE_ORDER_ITEM,
  REMOVE_ORDER,
  GET_ALL_ORDERS,
} from "../actionTypes";

const initialState: any = {
  orders: [],
  fetched: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action: any): any => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
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
    case ADD_ORDER_ITEM:
      return {
        ...state,
        orders: action.payload,
      };
    case REMOVE_ORDER_ITEM:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
