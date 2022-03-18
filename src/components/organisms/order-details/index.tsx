import React, { useState } from "react";
import Modal from "src/components/molecules/modal";
import Table from "src/components/organisms/table";
import { calculatePercentage } from "src/helpers";
import { Order, OrderItem } from "src/types";
import styles from "./order-details.module.scss";

interface OrderDetailsProps {
  order?: Order | null;
}

const OrderDetails = ({ order }: OrderDetailsProps) => {
  const [show, setModal] = useState<boolean>(false);
  const { total, id, items } = order || {};
  const [products, setProducts] = useState<OrderItem[] | undefined>(
    items || []
  );

  const handleDelete = (id: string, e: React.SyntheticEvent): void => {
    const filteredOrders: OrderItem[] | undefined = products?.filter(
      (item: OrderItem) => item["product-id"] !== id
    );

    setProducts(filteredOrders);
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
          items={products}
          addRow={() => setModal(true)}
          onDelete={handleDelete}
        />
        <Modal show={show} close={() => setModal(false)}>
          Modal content here
        </Modal>
      </div>
    </div>
  );
};

export default OrderDetails;
