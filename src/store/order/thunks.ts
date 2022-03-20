import { toast } from "react-toastify";

import { calculateTotal } from "src/helpers";
import { getAllOrders } from "src/services";

import { Order, OrderItem } from "src/types";
import {
  addOrderAction,
  addOrderItemAction,
  getAllOrdersAction,
  removeOrderAction,
  removeOrderItemAction,
} from "./actions";

export const addOrderThunk: any =
  (order: Order) => async (dispatch: Function, getState: Function) => {
    const {
      orderReducer: { orders },
    } = getState();
    if (order) {
      const updatedOrders: Order[] = [...orders, order];
      return dispatch(addOrderAction(updatedOrders));
    }
  };

export const getOrdersThunk: any = () => async (dispatch: Function) => {
  const data = await getAllOrders();
  if (data) {
    return dispatch(getAllOrdersAction(data));
  }
};

export const removeOrderThunk =
  (id: string) => async (dispatch: Function, getState: Function) => {
    if (id) {
      const { orderReducer } = getState();

      const updatedOrders: Order[] = orderReducer.orders.filter(
        (order: Order) => order.id !== id
      );
      return dispatch(removeOrderAction(updatedOrders));
    }
  };

export const addOrderItemThunk =
  (orderId: string | undefined, product: OrderItem) =>
  async (dispatch: Function, getState: Function) => {
    const { orderReducer } = getState();

    const updatedOrders: Order[] = orderReducer.orders.map((order: Order) => {
      if (order.id === orderId) {
        const orderItemExists = order?.items?.find(
          (item: OrderItem) => item["product-id"] === product["product-id"]
        );

        if (!orderItemExists) {
          order.items = [...order.items, product];
          order.total = String(calculateTotal(order.items, "total"));
        } else {
          toast.error("Product already exists!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
      return order;
    });

    return dispatch(addOrderItemAction(updatedOrders));
  };

export const removeOrderItemThunk =
  (orderId: string | undefined, productId: string) =>
  async (dispatch: Function, getState: Function) => {
    if (orderId && productId) {
      const { orderReducer } = getState();

      const updatedOrders: Order[] = orderReducer.orders.map((order: Order) => {
        if (order.id === orderId) {
          order.items = order.items.filter(
            (product: OrderItem) => product["product-id"] !== productId
          );
          order.total = String(calculateTotal(order.items, "total"));
        }

        return order;
      });

      return dispatch(removeOrderItemAction(updatedOrders));
    }
  };
