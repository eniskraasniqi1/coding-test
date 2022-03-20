import React, { Dispatch, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ConnectedProps, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "src/components/molecules/modal";
import AddOrder from "src/components/organisms/add-order";
import Table from "src/components/organisms/table";
import { addOrderThunk, removeOrderThunk } from "src/store/order/thunks";
import { Order } from "src/types";

const Orders = ({ orders, removeOrder, addOrder }: Props) => {
  const [show, setModal] = useState<boolean>(false);
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
        addRow={() => setModal(true)}
        addButtonLabel={
          <>
            Add Order <FaPlus />
          </>
        }
      />
      <Modal show={show} close={() => setModal(false)}>
        <AddOrder
          onSubmit={(order) => {
            addOrder(order);
            setModal(false);
            navigate(`/orders/${order.id}`);
            toast.success("Order created. Now go add items!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        />
      </Modal>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  orders: state.orderReducer.orders,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  removeOrder: (id: string) => dispatch(removeOrderThunk(id)),
  addOrder: (order: Order) => dispatch(addOrderThunk(order)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(Orders);
