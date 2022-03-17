import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "src/components/organisms/table";
import { getAllOrders } from "src/services";
import { Order } from "src/types";

const Orders = () => {
  const [orders, setOrders] = useState<Order[] | []>([]);
  const navigate = useNavigate();

  const handleDelete = (id: string, e: React.SyntheticEvent): void => {
    e.stopPropagation();
    const filteredOrders: Order[] = orders.filter(
      (order: Order) => order.id !== id
    );

    setOrders(filteredOrders);
  };

  const navigateTo = (path: string, e: React.SyntheticEvent): void => {
    e.preventDefault();
    navigate(path);
  };

  useEffect(() => {
    const getOrdersHook = async () => {
      const data = await getAllOrders();
      setOrders(data);
    };

    getOrdersHook();
  }, []);

  return (
    <>
      <Table
        headerList={["Order id.", "Customer", "Quantity", "Total Price"]}
        items={orders}
        onDelete={handleDelete}
        onClick={navigateTo}
      />
    </>
  );
};

export default Orders;
