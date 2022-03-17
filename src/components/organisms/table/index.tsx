import React, { useState, useEffect } from "react";
import TableHeader from "src/components/atoms/table/header";
import TableRow from "src/components/atoms/table/row";
import { getAllOrders } from "src/services";
import { Order } from "src/types";

import styles from "./table.module.scss";

const Table = () => {
  const [orders, setOrders] = useState<Order[] | []>([]);

  const handleDelete = (id: string, e: React.SyntheticEvent): void => {
    e.stopPropagation();
    const filteredOrders: Order[] = orders.filter(
      (order: Order) => order.id !== id
    );

    setOrders(filteredOrders);
  };

  useEffect(() => {
    const getOrdersHook = async () => {
      const data = await getAllOrders();
      setOrders(data);
    };

    getOrdersHook();
  }, []);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <TableHeader
          list={["Order id.", "Customer", "Quantity", "Total Price"]}
        />
        <tbody className={styles.body}>
          {orders?.map((order: Order, index: number) => (
            <TableRow
              key={`order.id-#${index}`}
              order={order}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
