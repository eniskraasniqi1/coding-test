import React from "react";
import Button from "src/components/atoms/button";
import { getIdentifierKey, isPrimitive } from "src/helpers";
import styles from "./table-row.module.scss";

interface TableBodyProps {
  items?: any[];
  onDelete?: (id: string, e: React.SyntheticEvent) => void;
  onClick?: (path: string, e: React.SyntheticEvent) => void;
}

const TableBody = ({ items, onDelete, onClick }: TableBodyProps) => (
  <tbody className={styles.body}>
    {items?.map((item: any) => {
      const keys: string[] = Object.keys(item) || [];
      const itemIdKey: string = getIdentifierKey(item);

      return (
        <tr
          className={styles.tableRow}
          onClick={(e) => onClick && onClick(`/orders/${item[itemIdKey]}`, e)}
          key={`${item[itemIdKey]}`}
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
              <Button
                className="danger"
                btnText="X"
                onClick={(e: any) => onDelete && onDelete(item[itemIdKey], e)}
              />
            )}
          </td>
        </tr>
      );
    })}
  </tbody>
);

export default TableBody;
