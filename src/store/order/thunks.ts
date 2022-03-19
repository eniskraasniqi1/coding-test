import { getAllOrders } from "src/services";
import { Product } from "src/types";
import {
  addProductAction,
  getAllOrdersAction,
  removeOrderAction,
  removeProductAction,
} from "./actions";

export const getOrdersThunk: any = () => async (dispatch: Function) => {
  const data = await getAllOrders();
  if (data) {
    return dispatch(getAllOrdersAction(data));
  }
};

export const removeOrderThunk = (id: string) => async (dispatch: Function) => {
  if (id) {
    return dispatch(removeOrderAction(id));
  }
};

export const addProductThunk =
  (orderId: string | undefined, product: Product) =>
  async (dispatch: Function) => {
    if (orderId && product) {
      return dispatch(addProductAction(orderId, product));
    }
  };

export const removeProductThunk =
  (orderId: string | undefined, productId: string) =>
  async (dispatch: Function) => {
    console.log(orderId)
    console.log('productId', productId)
    if (orderId && productId) {
      return dispatch(removeProductAction(orderId, productId));
    }
  };
