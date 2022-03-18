import { Product } from "src/types";

export function calculatePercentage(items: Product[] | undefined): any {
  if (!items?.length) return 0;
  const sum = items.reduce((a, b) => a + Number(b["unit-price"]), 0);

  return (sum / items.length).toFixed(2) || 0;
}

export function isPrimitive(val: any) {
  if (val === Object(val)) {
    return false;
  } else {
    return true;
  }
}

export function getIdentifierKey(item: any): string {
  const keys = ["id", "product-id"];
  return keys.find((key) => (item[key] ? true : false)) || "id";
}
