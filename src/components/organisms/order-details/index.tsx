import React from "react";
import Table from "src/components/organisms/table";
import { calculatePercentage } from "src/helpers";
import { Order } from "src/types";
import styles from "./order-details.module.scss";

interface OrderDetailsProps {
  order?: Order | null;
}

const OrderDetails = ({ order }: OrderDetailsProps) => {
  const { total, id, items } = order || {};

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
        />
      </div>
    </div>
  );
};

export default OrderDetails;
