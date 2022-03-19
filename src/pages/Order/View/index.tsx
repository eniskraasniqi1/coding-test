import React, { Dispatch, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "src/components/molecules/modal";
import Table from "src/components/organisms/table";
import { calculatePercentage } from "src/helpers";
import { addProductThunk, removeProductThunk } from "src/store/order/thunks";
import { Order, Product } from "src/types";
import AddProductForm from "src/components/organisms/add-product";
import styles from "./view.module.scss";

const View = ({ orders, addProduct, removeProduct }: Props) => {
  const { id } = useParams();
  const [show, setModal] = useState<boolean>(false);
  const order = orders?.find((order: Order) => order.id === id);

  if (!order) {
    return <h1>No Order found with that ID</h1>;
  }

  const { total, items } = order || {};

  const handleDelete = (productId: string, e: React.SyntheticEvent): void => {
    removeProduct(id, productId);
  };

  const handleOnSubmit = (product: Product): void => {
    addProduct(id, product);
    setModal(false);
  };

  return (
    <div className={styles.detailsComponent}>
      <div className={styles.header}>Order # {id}</div>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <span>{order?.["customer-id"]}</span>
          <span>Customer</span>
        </div>
        <div className={styles.statBox}>
          <span>{items?.length}</span>
          <span>Items</span>
        </div>
        <div className={styles.statBox}>
          <span>{calculatePercentage(items)}</span>
          <span>AVG Unit Price</span>
        </div>
        <div className={styles.statBox}>
          <span>{total}</span>
          <span>Total</span>
        </div>
      </div>
      <div className={styles.products}>
        <p>Products</p>
        <Table
          headerList={["Product Id.", "Quantity", "Price", "Total"]}
          items={items}
          addRow={() => setModal(true)}
          onDelete={handleDelete}
        />
        <Modal show={show} close={() => setModal(false)}>
          <AddProductForm onSubmit={handleOnSubmit} />
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  orders: state.orderReducer.orders,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  addProduct: (id: string | undefined, product: Product) =>
    dispatch(addProductThunk(id, product)),
  removeProduct: (id: string | undefined, productId: string) =>
    dispatch(removeProductThunk(id, productId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(View);
