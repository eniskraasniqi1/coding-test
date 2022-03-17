// Shared types go in this file
export type Order = {
  id: string;
  "customer-id": string;
  items: OrderItem[];
  total: string;
};

export type OrderItem = {
  "product-id": string;
  quantity: string;
  "unit-price": string;
  total: string;
};
