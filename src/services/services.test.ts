import { Customer, Order, Product } from "src/types";
import {
  getOrderById,
  getAllOrders,
  getCustomerById,
  getAllCustomers,
  getProductById,
  getAllProducts,
} from ".";

// We can mock axios calls when api is connected. The throw error part can't be tested for now since we have dummy data instead of api calls.
describe("Services API mocking", () => {
  it("Should return order by ID", async () => {
    const order: Order = await getOrderById("1");
    expect(order).toBeTruthy();
    expect(order.id).toEqual("1");
  });

  it("Should return all Orders", async () => {
    const orders: Order[] = await getAllOrders();
    expect(orders).toBeTruthy();
    expect(orders).toHaveLength(3);
  });

  it("Should get the right Customer by id", async () => {
    const customer: Customer = await getCustomerById("1");

    expect(customer).toBeTruthy();
    expect(customer.id).toEqual("1");
  });

  it("Should return all Customers", async () => {
    const customers: Customer[] = await getAllCustomers();
    expect(customers).toBeTruthy();
    expect(customers).toHaveLength(3);
  });

  it("Should get the right Product by id", async () => {
    const product: Product = await getProductById("A101");

    expect(product).toBeTruthy();
    expect(product.id).toEqual("A101");
  });

  it("Should return all Products", async () => {
    const products: Product[] = await getAllProducts();
    expect(products).toBeTruthy();
    expect(products).toHaveLength(5);
  });
});
