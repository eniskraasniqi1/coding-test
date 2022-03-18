import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import InputField from "src/components/atoms/input-field";

import styles from "./add-product.module.scss";
import { Product } from "src/types";
import Button from "src/components/atoms/button";

interface AddProductFormProps {
  onSubmit: (item: Product) => void;
}

const AddProductForm = ({ onSubmit }: AddProductFormProps) => {
  const [error, setError] = useState("");

  const {
    submitCount,
    errors,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      productId: "",
      quantity: "",
      price: "",
      total: "",
    },
    onSubmit: async (values) => {
      const product = {
        "product-id": values.productId,
        quantity: values.quantity,
        total: values.total,
        "unit-price": values.price,
      };
      setError("");
      onSubmit(product);
    },
    validationSchema: yup.object({
      productId: yup.string().required("Product ID is required!"),
      quantity: yup.number().required("Quantity is required!"),
      price: yup.number().required("Price is required!"),
      total: yup.number().required("Total is required!"),
    }),
    validateOnMount: false,
  });

  return (
    <div className={styles.wrapper}>
      <h3>Add a product</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          error={
            errors.productId && submitCount > 0 ? errors.productId : undefined
          }
          label="Product Id."
          required={true}
          input={{
            type: "text",
            id: "productId",
            name: "productId",
            value: values.productId,
            onChange: handleChange,
            onBlur: handleBlur,
          }}
        />
        <InputField
          error={
            errors.quantity && submitCount > 0 ? errors.quantity : undefined
          }
          label="Quantity"
          required={true}
          input={{
            id: "quantity",
            name: "quantity",
            type: "number",
            value: values.quantity,
            onChange: handleChange,
            onBlur: handleBlur,
          }}
        />
        <InputField
          error={errors.price && submitCount > 0 ? errors.price : undefined}
          label="Price"
          required={true}
          input={{
            id: "price",
            name: "price",
            type: "number",
            value: values.price,
            onChange: handleChange,
            onBlur: handleBlur,
          }}
        />

        <InputField
          error={errors.total && submitCount > 0 ? errors.total : undefined}
          label="Total"
          required={true}
          input={{
            id: "total",
            name: "total",
            type: "number",
            value: values.total,
            onChange: handleChange,
            onBlur: handleBlur,
          }}
        />

        {error?.length > 0 && <div>{error}</div>}
        <div className={styles.buttonWrapper}>
          <Button type="submit" btnText="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
