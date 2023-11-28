import styles from "./form.module.scss";
import { Button } from "../button";
import { InputPassword } from "../inputPassword";
import { InputText } from "../inputText";

export const LoginForm = () => {
  return (
    <div className={styles.form}>
      <h2>Login</h2>
      <InputText label="Email" placeholder="Enter your e-mail" />
      <InputPassword />
      <div style={{ textAlign: "end", marginBottom: "10px" }}>
        Forget Password?
      </div>
      <Button>Login</Button>
    </div>
  );
};
