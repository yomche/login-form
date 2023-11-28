import { ChangeEvent, FC } from "react";
import cn from "classnames";
import { FaUser } from "react-icons/fa";
import styles from "./inputText.module.scss";

interface InputTextProps {
  type?: "text";
  id?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  format?: RegExp;
}

export const InputText: FC<InputTextProps> = (props) => {
  const {
    value,
    onValueChange,
    label,
    errorMessage,
    error,
    id = "text",
    placeholder,
    type,
    format,
  } = props;

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    let currValue = evt.target.value;
    if (format) {
      currValue = currValue.match(format)?.[0] ?? "";
    }
    onValueChange?.(currValue);
  };

  return (
    <div className={styles.container}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        className={cn(error && styles.error)}
        type={type}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
      />
      {error && errorMessage ? (
        <p className={styles.error}>{errorMessage}</p>
      ) : null}
      <span className={styles.icon}>
        <FaUser />
      </span>
    </div>
  );
};
