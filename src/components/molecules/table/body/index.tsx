import React from "react";
import { isPrimitive } from "src/helpers";
import styles from "./table-row.module.scss";

interface TableBodyProps {
  items?: any[];
  onDelete?: (id: string, e: React.SyntheticEvent) => void;
  onClick?: (path: string, e: React.SyntheticEvent) => void;
}

const TableBody = ({ items, onDelete, onClick }: TableBodyProps) => (
  <tbody className={styles.body}>
    {items?.map((item: any) => {
      const keys = Object.keys(item) || [];

      return (
        <tr
          className={styles.tableRow}
          onClick={(e) => onClick && onClick(`/orders/${item.id}`, e)}
          key={`${item.id}`}
        >
          {keys?.map((key: string, index: number) => (
            <React.Fragment key={`td-#${index}`}>
              {isPrimitive(item[key]) ? (
                <td>{item[key]}</td>
              ) : (
                <td>{item[key]?.length}</td>
              )}
            </React.Fragment>
          ))}
          <td>
            {onDelete && (
              <button onClick={(e) => onDelete && onDelete(item.id, e)}>
                X
              </button>
            )}
          </td>
        </tr>
      );
    })}
  </tbody>
);

export default TableBody;
