import React from "react";
import Button from "src/components/atoms/button";

import styles from "./table-header.module.scss";

export interface TableHeaderProps {
  list?: string[];
  addRow?: (item: any) => void;
  addButtonLabel?: React.ReactElement | string;
}

const TableHeader = ({
  list,
  addRow,
  addButtonLabel = "+",
}: TableHeaderProps) => (
  <thead className={styles.header}>
    <tr>
      {list?.map((name: string, index: number) => (
        <th key={`name-#${index}`}>{name}</th>
      ))}
      <th className={styles.btnContainer}>
        {addRow && (
          <Button
            className="rounded"
            btnText={addButtonLabel}
            onClick={addRow}
          />
        )}
      </th>
    </tr>
  </thead>
);

export default TableHeader;
