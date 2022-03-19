import * as yup from "yup";

const addProductSchema = yup.object({
  product: yup.string().required("Product is required!"),
  quantity: yup
    .number()
    .min(1, "Minimum 1 allowed!")
    .max(10, "Maximum 10 allowed!")
    .required("Quantity is required!"),
  price: yup.number().required("Price is required!"),
  total: yup.number().required("Total is required!"),
});

export { addProductSchema };
