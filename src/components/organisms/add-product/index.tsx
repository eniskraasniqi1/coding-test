import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

import InputField from "src/components/atoms/input-field";

import styles from "./add-product.module.scss";
import { OrderItem, Product } from "src/types";
import Button from "src/components/atoms/button";
import SelectField from "src/components/atoms/select-field";

interface AddProductFormProps extends Props {
  onSubmit: (item: OrderItem) => void;
}

const AddProductForm = ({ onSubmit, products }: AddProductFormProps) => {
  const [error, setError] = useState("");
  const [currentProduct, setProduct] = useState<Product | undefined>(
    products && products[0]
  );

  const {
    submitCount,
    errors,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      product: currentProduct?.id || "",
      quantity: "1",
      price: currentProduct?.price || "",
      total: currentProduct?.price || "",
    },
    onSubmit: async (values) => {
      const orderItem: OrderItem = {
        "product-id": values.product,
        quantity: values.quantity,
        total: values.total,
        "unit-price": values.price,
      };

      setError("");
      onSubmit(orderItem);
    },
    validationSchema: yup.object({
      product: yup.string().required("Product is required!"),
      quantity: yup.number().required("Quantity is required!"),
      price: yup.number().required("Price is required!"),
      total: yup.number().required("Total is required!"),
    }),
    validateOnMount: false,
  });

  const handleProductChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const foundProduct = products?.find(
      (product: Product) => product.id === e.target.value
    );

    handleChange(e);
    setProduct(foundProduct);

    const totalVal = (
      Number(values.quantity) * Number(foundProduct?.price)
    ).toFixed(3);
    setFieldValue("price", Number(foundProduct?.price));
    setFieldValue("total", totalVal);
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleChange(e);
    const totalVal = (
      Number(e.target.value) * Number(currentProduct?.price)
    ).toFixed(3);
    setFieldValue("total", totalVal);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Add a product</h3>
      <form onSubmit={handleSubmit}>
        <SelectField
          error={errors.product && submitCount > 0 ? errors.product : undefined}
          label="Product"
          required
          select={{
            id: "product",
            name: "product",
            value: values.product,
            onChange: handleProductChange,
            onBlur: handleBlur,
          }}
          options={products?.map((product: Product) => ({
            value: product.id,
            label: product.description,
          }))}
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
            type: "string",
            value: values.quantity,
            onChange: handleQuantityChange,
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
            type: "string",
            disabled: true,
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
            type: "string",
            disabled: true,
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

const mapStateToProps = (state: any) => ({
  products: state.orderReducer.products,
});

const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

export default connector(AddProductForm);
