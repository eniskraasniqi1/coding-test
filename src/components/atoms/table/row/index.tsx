import React from "react";
import { useNavigate } from "react-router-dom";
import { Order } from "src/types";
import styles from "./table-row.module.scss";

interface TableRowProps {
  order: Order;
  onDelete: (id: string, e: React.SyntheticEvent) => void;
}

const TableRow = ({ order, onDelete }: TableRowProps) => {
  const navigate = useNavigate();

  const navigateTo = (e: React.SyntheticEvent, path: string): void => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <tr
      className={styles.tableRow}
      onClick={(e) => navigateTo(e, `/orders/${order.id}`)}
      key={`${order.id}`}
    >
      <td>{order.id}</td>
      <td>{order["customer-id"]}</td>
      <td>{order.items.length}</td>
      <td>{order.total}</td>
      <td>
        <button onClick={(e) => onDelete(order.id, e)}>X</button>
      </td>
    </tr>
  );
};

export default TableRow;
