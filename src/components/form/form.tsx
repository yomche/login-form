import styles from "./form.module.scss";
import { useForm } from "./useForm";
import { EmailForm, PhoneForm, CodeForm } from "../forms";

export const LoginForm = () => {
  const {
    formFields,
    formError,
    onEmailChange,
    onPasswordChange,
    isValid,
    formType,
    setFormType,
    phoneField,
    setPhoneField,
  } = useForm();

  return (
    <div className={styles.form}>
      <h2>{formType !== "code" ? "Login" : "Code Confirmation"}</h2>
      {formType !== "code" && (
        <div className={styles.switch}>
          via
          <span
            onClick={() =>
              formType === "email" ? setFormType("phone") : setFormType("email")
            }
          >{`${formType === "email" ? " phone" : " e-mail"}`}</span>
        </div>
      )}
      {formType === "email" ? (
        <EmailForm
          formFields={formFields}
          formError={formError}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          isValid={isValid}
          handleLogin={() => setFormType("code")}
        />
      ) : formType === "phone" ? (
        <PhoneForm
          phoneField={phoneField}
          handlePhoneField={setPhoneField}
          handleLogin={() => setFormType("code")}
        />
      ) : formType === "code" ? (
        <CodeForm />
      ) : null}
    </div>
  );
};
