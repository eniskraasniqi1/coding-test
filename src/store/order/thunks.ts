import { getAllOrders } from "src/services";
import { Order, Product } from "src/types";
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

export const addProductThunk =
  (orderId: string | undefined, product: Product) =>
  async (dispatch: Function, getState: Function) => {
    if (orderId && product) {
      const { orderReducer } = getState();

      const updatedOrders: Order[] = orderReducer.orders.map((order: Order) => {
        if (order.id === orderId) {
          order.items = [...order.items, product];
          order.total = String(Number(order.total) + Number(product.total));
        }
        return order;
      });

      return dispatch(addProductAction(updatedOrders));
    }
  };

export const removeProductThunk =
  (orderId: string | undefined, productId: string) =>
  async (dispatch: Function, getState: Function) => {
    if (orderId && productId) {
      const { orderReducer } = getState();

      const updatedOrders: Order[] = orderReducer.orders.map((order: Order) => {
        if (order.id === orderId) {
          order.items = order.items.filter((product: Product) => {
            if (product["product-id"] === productId) {
              order.total = String(Number(order.total) - Number(product.total));
              return false;
            }

            return true;
          });
        }

        return order;
      });

      return dispatch(removeProductAction(updatedOrders));
    }
  };
