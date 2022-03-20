import {
  ADD_ORDER,
  ADD_ORDER_ITEM,
  REMOVE_ORDER_ITEM,
  REMOVE_ORDER,
  GET_ALL_ORDERS,
  GET_ALL_PRODUCTS,
  GET_ALL_CUSTOMERS,
} from "../actionTypes";

const initialState: any = {
  orders: [],
  products: [],
  customers: [],
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
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};
