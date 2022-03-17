import { order1, order2, order3 } from "src/constants/orders";
import { Order } from "src/types";

// API Calls can be included instead of dummy data here.
const orders: Order[] = [order1, order2, order3];

function getOrderById(id: string | undefined): Promise<Order> {
  return new Promise((resolve, reject) => {
    const order: Order | undefined = orders.find((ord: Order) => ord.id === id);

    if (order) {
      resolve(order);
    } else {
      reject(new Error("No order found with ID"));
    }
  });
}

function getAllOrders(): Promise<Order[]> {
  return new Promise((resolve, reject) => {
    if (orders.length) {
      resolve(orders);
    } else {
      reject(new Error("There are no orders"));
    }
  });
}

export { getOrderById, getAllOrders };
