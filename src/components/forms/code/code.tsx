import { useCode } from "./useCode";
import { Button } from "../../button";
import { Timer } from "../../timer";
import styles from "./code.module.scss";
import "./styles.css";

export const CodeForm = ({ codeData }: { codeData: string }) => {
  const { code, digitsState, handleChange, handleKeyDown, handleClearCode } =
    useCode();

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        The code has been sent to you via <br />
        <span>{codeData}</span>
      </div>
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
      <div className={styles.button}>
        <Button disabled={code?.length !== 4}>Send code</Button>
      </div>
      <Timer resetFields={handleClearCode} />
    </div>
  );
};
