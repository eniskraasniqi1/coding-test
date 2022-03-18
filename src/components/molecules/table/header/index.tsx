import React from "react";
import Button from "src/components/atoms/button";

import styles from "./table-header.module.scss";

export interface TableHeaderProps {
  list?: string[];
  addRow?: (item: any) => void;
}

const TableHeader = ({ list, addRow }: TableHeaderProps) => (
  <thead className={styles.header}>
    <tr>
      {list?.map((name: string, index: number) => (
        <th key={`name-#${index}`}>{name}</th>
      ))}
      {addRow && (
        <th className={styles.btnContainer}>
          <Button btnText="+" onClick={addRow} />
        </th>
      )}
    </tr>
  </thead>
);

export default TableHeader;
