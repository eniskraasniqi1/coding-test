import { Customer, Order, Product } from "src/types";
import {
  ADD_ORDER_ITEM,
  REMOVE_ORDER,
  GET_ALL_ORDERS,
  REMOVE_ORDER_ITEM,
  GET_ALL_PRODUCTS,
  GET_ALL_CUSTOMERS,
} from "../actionTypes";

export const getAllOrdersAction = (payload: Order[]) => ({
  type: GET_ALL_ORDERS,
  payload,
});

export const removeOrderAction = (orders: Order[]) => ({
  type: REMOVE_ORDER,
  payload: orders,
});

export const addOrderItemAction = (orders: Order[]) => ({
  type: ADD_ORDER_ITEM,
  payload: orders,
});

export const removeOrderItemAction = (orders: Order[]) => ({
  type: REMOVE_ORDER_ITEM,
  payload: orders,
});

export const getAllProductsAction = (payload: Product[]) => ({
  type: GET_ALL_PRODUCTS,
  payload,
});

export const getAllCustomersAction = (payload: Customer[]) => ({
  type: GET_ALL_CUSTOMERS,
  payload,
});
