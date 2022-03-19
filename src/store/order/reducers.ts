import { Order } from "src/types";
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
      const id = action.payload;
      const updatedOrders = state.orders.filter((order: Order) => {
        return order.id !== id;
      });
      
      return {
        ...state,
        orders: updatedOrders,
      };
    case ADD_PRODUCT:
      const orders: Order[] = state.orders.map((order: Order) => {
        if (order.id === action.payload.orderId) {
          order.items = [...order.items, action.payload.product];
        }
        return order;
      });

      return {
        ...state,
        orders: [...orders],
      };
    case REMOVE_PRODUCT:
      const cleanedUpOrders: Order[] = state.orders.map((order: Order) => {
        if (order.id === action.payload.orderId) {
          order.items = order.items.filter(
            (product) => product["product-id"] !== action.payload.productId
          );
        }
        return order;
      });

      return {
        ...state,
        orders: cleanedUpOrders,
      };
    default:
      return state;
  }
};
