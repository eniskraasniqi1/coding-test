import React, { useState } from "react";
import Modal from "src/components/molecules/modal";
import Table from "src/components/organisms/table";
import { calculatePercentage } from "src/helpers";
import { Order, Product } from "src/types";
import AddProductForm from "../add-product";
import styles from "./order-details.module.scss";

interface OrderDetailsProps {
  order?: Order | null;
}

const OrderDetails = ({ order }: OrderDetailsProps) => {
  const [show, setModal] = useState<boolean>(false);
  const { total, id, items } = order || {};
  const [products, setProducts] = useState<Product[] | undefined>(items || []);

  const handleDelete = (id: string, e: React.SyntheticEvent): void => {
    const filteredOrders: Product[] | undefined = products?.filter(
      (item: Product) => item["product-id"] !== id
    );

    setProducts(filteredOrders);
  };

  const addProduct = (product: Product): void => {
    products && setProducts([...products, product]);
    setModal(false);
  };

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
        <p>Products</p>
        <Table
          headerList={["Product Id.", "Quantity", "Price", "Total"]}
          items={products}
          addRow={() => setModal(true)}
          onDelete={handleDelete}
        />
        <Modal show={show} close={() => setModal(false)}>
          <AddProductForm onSubmit={addProduct} />
        </Modal>
      </div>
    </div>
  );
};

export default OrderDetails;
