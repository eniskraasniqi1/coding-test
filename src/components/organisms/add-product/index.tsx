import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { FormikValues, useFormik } from "formik";

import InputField from "src/components/atoms/input-field";
import SelectField from "src/components/atoms/select-field";
import Button from "src/components/atoms/button";

import { OrderItem, Product } from "src/types";
import { addProductSchema } from "src/constants/schema";

import styles from "./add-product.module.scss";
import { getSelectValues } from "src/helpers";

interface AddProductFormProps extends Props {
  onSubmit: (item: OrderItem) => void;
}

const AddProductForm = ({ onSubmit, products }: AddProductFormProps) => {
  const [error, setError] = useState("");
  const [currentProduct, setProduct] = useState<Product | undefined>(
    products && products[0]
  );

  const handleFormSubmit = async (values: FormikValues) => {
    const orderItem: OrderItem = {
      "product-id": values.product,
      quantity: values.quantity,
      total: values.total,
      "unit-price": values.price,
    };

    setError("");
    onSubmit(orderItem);
  };

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
    onSubmit: handleFormSubmit,
    validationSchema: addProductSchema,
    validateOnMount: false,
  });

  const handleProductChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const foundProduct: Product = products?.find(
      (product: Product) => product.id === e.target.value
    );

    handleChange(e);
    setProduct(foundProduct);

    const totalVal: string = (
      Number(values.quantity) * Number(foundProduct?.price)
    ).toFixed(3);
    setFieldValue("price", Number(foundProduct?.price));
    setFieldValue("total", totalVal);
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleChange(e);
    const totalVal: string = (
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
          options={getSelectValues(products)}
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
            type: "text",
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
            type: "text",
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
            type: "text",
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
