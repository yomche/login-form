import { ChangeEvent, useState } from "react";
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

export const InputText = ({
  value,
  onValueChange,
  label,
  errorMessage,
  error,
  id = "text",
  placeholder,
  type,
  format,
}: InputTextProps) => {
  const [hasFocus, setHasFocus] = useState(false);

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
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        id={id}
        className={cn(error && styles.error)}
        type={type}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
        autoComplete="false"
      />
      {error && errorMessage ? (
        <p className={styles.error}>{errorMessage}</p>
      ) : null}
      <span
        className={cn(
          styles.icon,
          hasFocus && styles.focus,
          error && styles.iconError
        )}
      >
        <FaUser />
      </span>
    </div>
  );
};
