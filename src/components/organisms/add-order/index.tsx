import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { FormikValues, useFormik } from "formik";

import SelectField from "src/components/atoms/select-field";
import Button from "src/components/atoms/button";

import { Customer, Order } from "src/types";
import { addOrderSchema } from "src/constants/schema";
import { keygen } from "src/helpers";

import styles from "./add-order.module.scss";

interface AddOrderProps extends Props {
  onSubmit: (item: Order) => void;
}

const AddOrder = ({ onSubmit, customers }: AddOrderProps) => {
  const [error, setError] = useState("");

  const handleFormSubmit = async (values: FormikValues) => {
    const randomId = keygen();
    const order: Order = {
      id: randomId,
      "customer-id": values.customer,
      items: [],
      total: "0",
    };

    setError("");
    onSubmit(order);
  };

  const {
    submitCount,
    errors,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      customer: customers[0]?.id,
    },
    onSubmit: handleFormSubmit,
    validationSchema: addOrderSchema,
    validateOnMount: false,
  });

  return (
    <div className={styles.wrapper}>
      <h3>Create an Order: </h3>
      <form onSubmit={handleSubmit}>
        <SelectField
          error={
            errors.customer && submitCount > 0 ? errors.customer : undefined
          }
          label="Customer"
          required
          select={{
            id: "customer",
            name: "customer",
            value: values.customer,
            onChange: handleChange,
            onBlur: handleBlur,
          }}
          options={customers.map((customer: Customer) => ({
            label: customer.name,
            value: customer.id,
          }))}
        />

        {error?.length > 0 && <div>{error}</div>}
        <div className={styles.buttonWrapper}>
          <Button type="submit" btnText="Create" />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  customers: state.orderReducer.customers,
});

const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(AddOrder);
