import { getAllProducts } from "src/services";

import { Product } from "src/types";
import { getAllProductsAction } from "./actions";

export const getProductsThunk = () => async (dispatch: Function) => {
  const data: Product[] = await getAllProducts();
  if (data) {
    return dispatch(getAllProductsAction(data));
  }
};
