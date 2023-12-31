import { ChangeEvent, FC, useState } from "react";
import cn from "classnames";
import { FaLock, FaLockOpen } from "react-icons/fa";
import styles from "./inputPassword.module.scss";

interface InputPasswordProps {
  id?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
}

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const {
    value,
    onValueChange,
    label = "Password",
    errorMessage,
    error,
    id = "password",
    placeholder = "Enter your password",
  } = props;
  const [show, setShow] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const togglePassword = () => {
    setShow((prev) => !prev);
  };

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(evt.target.value);
  };

  return (
    <div className={styles.container}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        id={id}
        className={cn(error && styles.error)}
        type={show ? "text" : "password"}
        value={value}
        autoComplete="new-password"
        onChange={onInputChange}
        placeholder={placeholder}
        maxLength={36}
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
        onClick={togglePassword}
      >
        {show ? <FaLockOpen /> : <FaLock />}
      </span>
    </div>
  );
};
