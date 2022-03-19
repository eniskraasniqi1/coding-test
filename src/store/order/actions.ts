import { Order } from "src/types";
import {
  ADD_PRODUCT,
  REMOVE_ORDER,
  GET_ALL_ORDERS,
  REMOVE_PRODUCT,
} from "../actionTypes";

export const getAllOrdersAction = (payload: Order[]) => ({
  type: GET_ALL_ORDERS,
  payload,
});

export const removeOrderAction = (orders: Order[]) => ({
  type: REMOVE_ORDER,
  payload: orders,
});

export const addProductAction = (orders: Order[]) => ({
  type: ADD_PRODUCT,
  payload: orders,
});

export const removeProductAction = (orders: Order[]) => ({
  type: REMOVE_PRODUCT,
  payload: orders,
});
