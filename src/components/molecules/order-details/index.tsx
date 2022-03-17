import React from "react";
import { calculatePercentage } from "src/helpers";
import { Order, OrderItem } from "src/types";
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
        Products:
        <ul>
          {order?.items.map((orderItem: OrderItem) => orderItem["product-id"])}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;
