// Shared types go in this file
export type Order = {
  id: string;
  "customer-id": string;
  items: Product[];
  total: string;
};

export type Product = {
  "product-id": string;
  quantity: string;
  "unit-price": string;
  total: string;
};

export type Input = {
  id: string;
  name: string;
  type: string;
  value: any;
  onChange: any;
  onBlur: any;
};
