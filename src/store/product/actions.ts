import { Product } from "src/types";
import { GET_ALL_PRODUCTS } from "../actionTypes";

export const getAllProductsAction = (payload: Product[]) => ({
  type: GET_ALL_PRODUCTS,
  payload,
});
