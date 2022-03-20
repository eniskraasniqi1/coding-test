import { Customer, Order, Product } from "src/types";

import { order1, order2, order3 } from "src/data/orders";
import { products } from "src/data/products";
import { customers } from "src/data/customers";

// API Calls can be included instead of dummy data here.
const orders: Order[] = [order1, order2, order3];

// function addOrder(order: Order): void {
//   try {
//     // connect api if we want to
//     // axios.post("", order);
//   } catch (err) {
//     console.log(err);
//   }
// }

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
      (product: Product) => product.id === id
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
      reject(new Error("There are no products"));
    }
  });
}

function getCustomerById(id: string | undefined): Promise<Customer> {
  return new Promise((resolve, reject) => {
    const customer: Customer | undefined = customers.find(
      (customer: Customer) => customer.id === id
    );
    if (customer) {
      resolve(customer);
    } else {
      reject(new Error("There is no customer with that ID"));
    }
  });
}

function getAllCustomers(): Promise<Customer[]> {
  return new Promise((resolve, reject) => {
    if (customers.length) {
      resolve(customers);
    } else {
      reject(new Error("There are no customers"));
    }
  });
}

export {
  // addOrder,
  getOrderById,
  getAllOrders,
  getProductById,
  getAllProducts,
  getCustomerById,
  getAllCustomers,
};
