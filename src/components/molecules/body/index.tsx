import { useEffect, Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Routes as Switch, Route } from "react-router-dom";
import { Orders, ViewOrder } from "src/pages/Order";
import { getAllProductsThunk, getOrdersThunk } from "src/store/order/thunks";

const Body = ({ fetched, getOrders, getProducts }: Props) => {
  useEffect(() => {
    if (!fetched) {
      getOrders();
      getProducts();
    }
  }, [fetched, getOrders, getProducts]);

  return (
    <div className="body-container">
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
  getProducts: () => dispatch(getAllProductsThunk()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(Body);
