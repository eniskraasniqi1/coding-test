import { order1, order2, order3 } from "src/constants/orders";
import { products } from "src/constants/products";
import { Order, Product } from "src/types";

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

function getProductById(id: string | undefined): Promise<Product> {
  return new Promise((resolve, reject) => {
    const product: Product | undefined = products.find(
      (ord: Product) => ord.id === id
    );

    if (product) {
      resolve(product);
    } else {
      reject(new Error("No product found with that ID"));
    }
  });
}

function getAllProducts(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    if (products.length) {
      resolve(products);
    } else {
      reject(new Error("There are no orders"));
    }
  });
}

export { getOrderById, getAllOrders, getProductById, getAllProducts };
