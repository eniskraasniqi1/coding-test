import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  type?: "submit" | "button" | "reset" | undefined;
  btnText: string;
  className?: string;
  onClick?: (val: any) => void;
}

const Button = ({ type, btnText, className, onClick }: ButtonProps) => {
  return (
    <button
      type={type && type}
      className={`${styles.button} ${className && styles[className]}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;