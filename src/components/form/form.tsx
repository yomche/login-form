import styles from "./form.module.scss";
import { Button } from "../button";
import { InputPassword } from "../inputPassword";
import { InputText } from "../inputText";
import { useForm } from "./useForm";
import { InputPhone } from "../inputPhone";

export const LoginForm = () => {
  const {
    formFields,
    formError,
    onEmailChange,
    onPasswordChange,
    isValid,
    formType,
    setFormType,
  } = useForm();

  return (
    <div className={styles.form}>
      <h2>Login</h2>
      <div className={styles.switch}>
        via
        <span
          onClick={() =>
            formType === "email" ? setFormType("phone") : setFormType("email")
          }
        >{`${formType === "email" ? " phone" : " e-mail"}`}</span>
      </div>
      {formType === "email" ? (
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
          <Button disabled={!isValid}>Login</Button>
        </>
      ) : (
        <>
          <InputPhone />
        </>
      )}
    </div>
  );
};
