import { Order } from "src/types";
import {
  ADD_ORDER,
  ADD_ORDER_ITEM,
  REMOVE_ORDER,
  GET_ALL_ORDERS,
  REMOVE_ORDER_ITEM,
} from "../actionTypes";

export const addOrderAction = (payload: Order[]) => ({
  type: ADD_ORDER,
  payload,
});

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
