import React from "react";

import styles from "./table-header.module.scss";

export interface TableHeaderProps {
  list?: string[];
}

const TableHeader = ({ list }: TableHeaderProps) => (
  <thead className={styles.header}>
    <tr>
      {list?.map((name: string, index: number) => (
        <th key={`name-#${index}`}>{name}</th>
      ))}
      <th></th>
    </tr>
  </thead>
);

export default TableHeader;
