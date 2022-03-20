import React, { Dispatch, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { FaCheck, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import Box from "src/components/atoms/stat-box";
import Button from "src/components/atoms/button";
import NotFound from "src/components/atoms/not-found";
import Modal from "src/components/molecules/modal";
import Table from "src/components/organisms/table";
import AddProductForm from "src/components/organisms/add-product";

import {
  addOrderItemThunk,
  removeOrderItemThunk,
} from "src/store/order/thunks";
import { Customer, Order, OrderItem } from "src/types";
import { calculatePercentage } from "src/helpers";
import { getCustomerById } from "src/services";

import styles from "./view.module.scss";

const View = ({ orders, addProduct, removeProduct }: Props) => {
  const { id } = useParams();
  const [show, setModal] = useState<boolean>(false);
  const order = orders?.find((order: Order) => order.id === id);
  const [customer, setCustomer] = useState<Customer>();
  const { total, items } = order || {};

  const handleDelete = (productId: string, e: React.SyntheticEvent): void => {
    removeProduct(id, productId);
  };

  const handleOrderSubmit = (order: Order) => {
    console.log("Placed the order!", order);
    toast.success("Order placed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleOnProductSubmit = (product: OrderItem): void => {
    addProduct(id, product);
    setModal(false);
  };

  useEffect(() => {
    const getCustomer = async () => {
      const data = await getCustomerById(order["customer-id"]);
      setCustomer(data);
    };

    order && getCustomer();
  }, [order]);

  if (!order) {
    return <NotFound text="Oooooops!! Order not found!" />;
  }

  return (
    <div className={styles.detailsComponent}>
      <div className={styles.header}>
        <span>Order # {id}</span>
        <Button
          className="success"
          onClick={handleOrderSubmit}
          btnText={
            <>
              <span>Submit</span> <FaCheck />
            </>
          }
        />
      </div>
      <div className={styles.statsContainer}>
        <Box label="Customer" value={customer?.name} />
        <Box label="Items" value={items?.length} />
        <Box
          label="AVG Unit Price"
          value={calculatePercentage(items, "unit-price")}
        />
        <Box label="Total" value={total} />
      </div>
      <div className={styles.products}>
        <p>Items</p>
        <Table
          headerList={["Product Id.", "Quantity", "Price", "Total"]}
          items={items}
          addRow={() => setModal(true)}
          addButtonLabel={
            <>
              Add Product <FaPlus />
            </>
          }
          onDelete={handleDelete}
        />
        <Modal show={show} close={() => setModal(false)}>
          <AddProductForm onSubmit={handleOnProductSubmit} />
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  orders: state.orderReducer.orders,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  addProduct: (id: string | undefined, product: OrderItem) =>
    dispatch(addOrderItemThunk(id, product)),
  removeProduct: (id: string | undefined, productId: string) =>
    dispatch(removeOrderItemThunk(id, productId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(View);
