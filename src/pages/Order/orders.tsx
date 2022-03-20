import React, { Dispatch } from "react";
import { ConnectedProps, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "src/components/organisms/table";
import { removeOrderThunk } from "src/store/order/thunks";

const Orders = ({ orders, removeOrder }: Props) => {
  const navigate = useNavigate();

  const handleDelete = (id: string, e: React.SyntheticEvent): void => {
    e.stopPropagation();

    removeOrder(id);
  };

  const navigateTo = (path: string, e: React.SyntheticEvent): void => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      <Table
        headerList={["Order id.", "Customer", "Items", "Total Price"]}
        items={orders}
        onDelete={handleDelete}
        onClick={navigateTo}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    orders: state.orderReducer.orders,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  removeOrder: (id: string) => dispatch(removeOrderThunk(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(Orders);
