import { OrderItem } from "src/types";

export function calculatePercentage(
  items: OrderItem[] | undefined,
  key: string = "unit-price"
): any {
  if (!items?.length) return 0;
  const sum = items.reduce((a: number, b: any) => a + Number(b[key]), 0);

  return (sum / items.length).toFixed(3) || 0;
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
  const keys = ["id", "product-id"];
  return keys.find((key) => (item[key] ? true : false)) || "id";
}
