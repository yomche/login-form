import styles from "./button.module.scss";

interface ButtonProps {
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
