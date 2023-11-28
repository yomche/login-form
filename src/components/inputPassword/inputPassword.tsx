import { ChangeEvent, FC, useState } from "react";
import cn from "classnames";
import { FaLock, FaLockOpen } from "react-icons/fa";
import styles from "./inputPassword.module.scss";

interface InputPasswordProps {
  id?: string;
  value?: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  messageText?: string;
  maxLength?: number;
}

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const {
    value,
    onChange,
    onValueChange,
    label = "Пароль",
    errorMessage,
    error,
    messageText,
    maxLength,
    id = "password",
    placeholder = "Ввести пароль",
  } = props;
  const [show, setShow] = useState(false);

  const togglePassword = () => {
    setShow((prev) => !prev);
  };

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt);
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
        maxLength={maxLength}
      />
      {error && errorMessage ? (
        <p className={styles.errorMessage}>{errorMessage}</p>
      ) : messageText ? (
        <p className={styles.textMessage}>{messageText}</p>
      ) : null}
      <span className={styles.icon} onClick={togglePassword}>
        {show ? <FaLockOpen /> : <FaLock />}
      </span>
    </div>
  );
};
