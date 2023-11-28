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
        id={id}
        className={cn(error && styles.error)}
        type={show ? "text" : "password"}
        value={value}
        autoComplete="new-password"
        onChange={onInputChange}
        placeholder={placeholder}
      />
      {error && errorMessage ? (
        <p className={styles.error}>{errorMessage}</p>
      ) : null}
      <span className={styles.icon} onClick={togglePassword}>
        {show ? <FaLockOpen /> : <FaLock />}
      </span>
    </div>
  );
};
