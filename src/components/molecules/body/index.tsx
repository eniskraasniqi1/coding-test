import { useEffect, Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Routes as Switch, Route } from "react-router-dom";
import { Orders, EditOrder, ViewOrder } from "src/pages/Order";
import { getOrdersThunk } from "src/store/order/thunks";

const Body = ({ fetched, getOrders }: Props) => {
  useEffect(() => {
    if (!fetched) {
      getOrders();
    }
  }, [fetched, getOrders]);

  return (
    <div className="body-container">
      <Switch>
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<ViewOrder />} />
        <Route path="/orders/edit/:id" element={<EditOrder />} />
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
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(Body);
