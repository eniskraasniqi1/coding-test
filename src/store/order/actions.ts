import { Order, Product } from "src/types";
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

export const removeOrderAction = (id: string) => ({
  type: REMOVE_ORDER,
  payload: id,
});

export const addProductAction = (orderId: string, product: Product) => ({
  type: ADD_PRODUCT,
  payload: { orderId, product },
});

export const removeProductAction = (orderId: string, productId: string) => ({
  type: REMOVE_PRODUCT,
  payload: { orderId, productId },
});
