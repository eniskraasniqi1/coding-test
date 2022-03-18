import React from "react";
import TableHeader from "src/components/molecules/table/header";
import TableBody from "src/components/molecules/table/body";

import styles from "./table.module.scss";

interface TableProps {
  headerList: string[];
  items: any[] | undefined;
  addRow?: (item: any) => void;
  onClick?: (path: string, e: React.SyntheticEvent) => void;
  onDelete?: (id: string, e: React.SyntheticEvent) => void;
}

const Table = ({
  headerList,
  items,
  addRow,
  onClick,
  onDelete,
}: TableProps) => (
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <TableHeader addRow={addRow} list={headerList} />
      <TableBody items={items} onClick={onClick} onDelete={onDelete} />
    </table>
  </div>
);

export default Table;
