import styles from "./email.module.scss";
import { Button } from "../../button";
import { InputPassword } from "../../inputPassword";
import { InputText } from "../../inputText";

interface EmailFormProps {
  formFields: { email: string; password: string };
  formError: { email: boolean; password: boolean };
  onEmailChange: (value: string, name: string) => void;
  onPasswordChange: (value: string, name: string) => void;
  isValid: boolean;
  handleLogin: () => void;
}

export const EmailForm = ({
  formFields,
  formError,
  onEmailChange,
  onPasswordChange,
  isValid,
  handleLogin,
}: EmailFormProps) => {
  return (
    <>
      <InputText
        label="Email"
        value={formFields.email}
        format={/^([a-zA-Z0-9_.+-@])+/g}
        onValueChange={(email) => onEmailChange("email", email)}
        placeholder="Enter your e-mail"
        error={formError.email}
        errorMessage="Please enter valid email"
      />
      <InputPassword
        value={formFields.password}
        onValueChange={(password) => onPasswordChange("password", password)}
        error={formError.password}
        errorMessage="Password must contain more than 8 symbols"
      />
      <div className={styles.forget}>
        <a>Forget Password?</a>
      </div>
      <Button disabled={!isValid} onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};
