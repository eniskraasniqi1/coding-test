import React from "react";
import TableHeader from "src/components/molecules/table/header";
import TableBody from "src/components/molecules/table/body";

import styles from "./table.module.scss";

interface TableProps {
  headerList: string[];
  items: any[] | undefined;
  addRow?: (item: any) => void;
  addButtonLabel?: React.ReactElement | string;
  onClick?: (path: string, e: React.SyntheticEvent) => void;
  onDelete?: (id: string, e: React.SyntheticEvent) => void;
}

const Table = ({
  headerList,
  items,
  addRow,
  addButtonLabel,
  onClick,
  onDelete,
}: TableProps) => (
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <TableHeader
        addButtonLabel={addButtonLabel}
        addRow={addRow}
        list={headerList}
      />
      <TableBody items={items} onClick={onClick} onDelete={onDelete} />
    </table>
  </div>
);

export default Table;
