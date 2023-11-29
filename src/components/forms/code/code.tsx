import { useCode } from "./useCode";
import styles from "./code.module.scss";
import "./styles.css";
export const CodeForm = () => {
  const { digitsState, handleChange, handleKeyDown } = useCode();

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        {digitsState.map((digitState, idx) => {
          return (
            <input
              key={idx}
              type="number"
              value={digitState.digit}
              className={"code-digit"}
              onChange={(event) => handleChange(event, idx)}
              onKeyDown={(event) => handleKeyDown(event, idx)}
            />
          );
        })}
      </div>
    </div>
  );
};
