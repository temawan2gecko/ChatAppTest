import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "danger" | "warning";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
