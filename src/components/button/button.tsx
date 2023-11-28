import { FC } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface ButtonProps {
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, disabled, className } = props;

  return (
    <button
      className={cn(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
