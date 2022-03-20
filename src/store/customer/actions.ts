import { Customer } from "src/types";
import { GET_ALL_CUSTOMERS } from "../actionTypes";

export const getAllCustomersAction = (payload: Customer[]) => ({
  type: GET_ALL_CUSTOMERS,
  payload,
});
