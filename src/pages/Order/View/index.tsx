import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderDetails from "src/components/organisms/order-details";
import { getOrderById } from "src/services";
import { Order } from "src/types";

const ViewOrder = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getOrderHook: () => Promise<void> = async () => {
      const order = await getOrderById(id);
      setOrder(order);
    };

    getOrderHook();
  }, [id]);

  if (!order) {
    return <h1>No Order found with that ID</h1>;
  }

  return (
    <>
      <OrderDetails order={order} />
    </>
  );
};

export default ViewOrder;
