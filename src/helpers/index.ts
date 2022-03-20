import { Product } from "src/types";

export function calculatePercentage(items: any[], key: string): number {
  if (!items?.length || !key) return 0;
  const sum = items.reduce((a: number, b: any) => a + Number(b[key]), 0);
  const value: number = sum / items.length;
  const percentage: string = value ? value.toFixed(3) : "0";
  
  return Number(percentage);
}

export function calculateTotal(items: any[], key: string): number {
  const total = items?.reduce((acc, current) => {
    acc += Number(current[key]);
    return acc;
  }, 0);

  return parseFloat(total?.toFixed(3));
}

export function isPrimitive(val: any) {
  if (val === Object(val)) {
    return false;
  } else {
    return true;
  }
}

export function getIdentifierKey(item: any): string {
  if (!item) return "";
  const keys = ["id", "product-id"];
  return keys.find((key) => (item[key] ? true : false)) || "";
}

export function getSelectValues(products?: Product[]) {
  if (!products) return [];
  return products?.map((product: Product) => ({
    value: product.id,
    label: product.description,
  }));
}
