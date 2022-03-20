import { GET_ALL_CUSTOMERS } from "../actionTypes";

const initialState: any = {
  customers: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};
