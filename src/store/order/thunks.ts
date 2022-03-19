import { getAllOrders, getAllProducts } from "src/services";
import { Order, OrderItem, Product } from "src/types";
import {
  addOrderItemAction,
  getAllOrdersAction,
  getAllProductsAction,
  removeOrderAction,
  removeOrderItemAction,
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

export const getAllProductsThunk = () => async (dispatch: Function) => {
  const data: Product[] = await getAllProducts();
  if (data) {
    return dispatch(getAllProductsAction(data));
  }
};

export const addOrderItemThunk =
  (orderId: string | undefined, product: OrderItem) =>
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

      return dispatch(addOrderItemAction(updatedOrders));
    }
  };

export const removeOrderItemThunk =
  (orderId: string | undefined, productId: string) =>
  async (dispatch: Function, getState: Function) => {
    if (orderId && productId) {
      const { orderReducer } = getState();

      const updatedOrders: Order[] = orderReducer.orders.map((order: Order) => {
        if (order.id === orderId) {
          order.items = order.items.filter((product: OrderItem) => {
            if (product["product-id"] === productId) {
              order.total = String(Number(order.total) - Number(product.total));
              return false;
            }

            return true;
          });
        }

        return order;
      });

      return dispatch(removeOrderItemAction(updatedOrders));
    }
  };
