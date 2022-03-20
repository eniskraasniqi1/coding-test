import { products } from "src/data/products";
import { Customer } from "src/types";
import {
  calculatePercentage,
  calculateTotal,
  isPrimitive,
  getIdentifierKey,
  getSelectValues,
} from ".";

describe("Helpers tests", () => {
  const arrayOfItems = [
    { id: 1, price: "3.1" },
    { id: 2, price: "3.2" },
    { id: 3, price: "3.3" },
    { id: 3, price: "3.33334" },
  ];

  it("Should calculate right percentage", () => {
    const percentage: number = calculatePercentage(arrayOfItems, "price");

    expect(percentage).toEqual(3.233);
  });

  it("Should return 0 percentage", () => {
    const percentage: number = calculatePercentage([], "price");
    expect(percentage).toEqual(0);
  });

  it("Should return 0 percentage even when there's no key", () => {
    const percentage: number = calculatePercentage(arrayOfItems, "aaprice");
    expect(percentage).toEqual(0);
  });

  it("Should calculate total's right value", () => {
    const total: number = calculateTotal(arrayOfItems, "price");
    expect(total).toEqual(12.933);
  });

  it("Should return 0 total value", () => {
    const total: number = calculateTotal([], "price");
    expect(total).toEqual(0);
  });

  it("IsPrimitive should return the right value", () => {
    let val: number = 1,
      val2: {} = {},
      val3: any[] = [],
      val4: string = "";

    expect(isPrimitive(val)).toEqual(true);
    expect(isPrimitive(val2)).toEqual(false);
    expect(isPrimitive(val3)).toEqual(false);
    expect(isPrimitive(val4)).toEqual(true);
  });

  it("Should return the identifierKey based on constants", () => {
    const customer: Customer = {
      id: "1",
      name: "Coca Cola",
      since: "10-07-1959",
      revenue: "Do it or it does!",
    };
    expect(getIdentifierKey(customer)).toEqual("id");
    expect(getIdentifierKey({ noKey: "here" })).toEqual("");
    expect(getIdentifierKey(null)).toEqual("");
  });

  it("Should return reformed values for select", () => {
    const values = getSelectValues(products);

    expect(values).toHaveLength(5);
    expect(values[0]).toHaveProperty("label");
    expect(values[0]).toHaveProperty("value");
  });

  it("Should return empty array if nothing is provided", () => {
    const values = getSelectValues();
    expect(values).toHaveLength(0);
  });
});
