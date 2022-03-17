import { OrderItem } from "src/types";

export function calculatePercentage(items: OrderItem[] | undefined): any {
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
