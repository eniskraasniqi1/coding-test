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

export type Product = {
  id: string;
  description: string;
  category: string;
  price: string;
};

export type Input = {
  id: string;
  name: string;
  type?: string;
  disabled?: boolean;
  value: any;
  onChange: any;
  onBlur: any;
};

export type SelectOption = {
  value: string;
  label: string;
};

// Redux
export interface AppState {
  orders?: Order[];
}
