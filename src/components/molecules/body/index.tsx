import { useEffect, Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Routes as Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Orders, ViewOrder } from "src/pages/Order";
import {
  getProductsThunk,
  getCustomersThunk,
  getOrdersThunk,
} from "src/store/order/thunks";

import "react-toastify/dist/ReactToastify.css";

const Body = ({ fetched, getOrders, getProducts, getCustomers }: Props) => {
  useEffect(() => {
    if (!fetched) {
      getOrders();
      getProducts();
      getCustomers();
    }
  }, [fetched, getOrders, getCustomers, getProducts]);

  return (
    <div className="body-container">
      <ToastContainer />
      <Switch>
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<ViewOrder />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  fetched: state.orderReducer.fetched,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getOrders: () => dispatch(getOrdersThunk()),
  getProducts: () => dispatch(getProductsThunk()),
  getCustomers: () => dispatch(getCustomersThunk()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(Body);
