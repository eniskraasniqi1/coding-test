import React from "react";
import { Input as InputType } from "src/types";

import styles from "./input-field.module.scss";

interface InputFieldProps {
  label: string;
  error?: string | undefined;
  input: InputType;
  required?: boolean;
}

const InputField = ({ label, error, input, required }: InputFieldProps) => (
  <>
    <div className={styles.inputWrapper}>
      <label htmlFor={input.id}>
        {label} {required && <span>*</span>}
      </label>
      <input {...input} />
      {<div className={styles.errorText}>{error && error}</div>}
    </div>
  </>
);

export default InputField;
