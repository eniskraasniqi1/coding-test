import { getAllCustomers } from "src/services";

import { getAllCustomersAction } from "./actions";

export const getCustomersThunk: any = () => async (dispatch: Function) => {
  const data = await getAllCustomers();
  if (data) {
    return dispatch(getAllCustomersAction(data));
  }
};
