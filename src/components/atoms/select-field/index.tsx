import { Input, SelectOption } from "src/types";

import styles from "./select-field.module.scss";

interface SelectFieldProps {
  label: string;
  error: string | undefined;
  select: Input;
  required?: boolean;
  options?: SelectOption[];
}

const SelectField = ({
  label,
  error,
  select,
  required,
  options,
}: SelectFieldProps) => {
  return (
    <>
      <div className={styles.selectWrapper}>
        <label htmlFor={select.id}>
          {label} {required && <span>*</span>}
        </label>
        <select {...select}>
          {options?.map((singleOption) => (
            <option key={singleOption.value} value={singleOption.value}>
              {singleOption.label}
            </option>
          ))}
        </select>
        {error && <div className={styles.errorText}>{error}</div>}
      </div>
    </>
  );
};

export default SelectField;
