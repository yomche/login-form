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
    handleSwitch,
    phoneField,
    handlePhoneField,
    handleLogin,
    codeData,
    backToLogin,
  } = useForm();

  const formsMap: { [field: string]: JSX.Element } = {
    email: (
      <EmailForm
        formFields={formFields}
        formError={formError}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        isValid={isValid}
        handleLogin={handleLogin}
      />
    ),
    phone: (
      <PhoneForm
        phoneField={phoneField}
        handlePhoneField={handlePhoneField}
        handleLogin={handleLogin}
      />
    ),
    code: <CodeForm codeData={codeData} />,
  };

  return (
    <>
      <div className={styles.form}>
        <h2>{formType !== "code" ? "Login" : "Code Confirmation"}</h2>
        {formType !== "code" && (
          <div className={styles.switch}>
            via
            <span onClick={() => handleSwitch(formType)}>{`${
              formType === "email" ? " phone" : " e-mail"
            }`}</span>
          </div>
        )}
        {formsMap[formType]}
      </div>
      <div className="register">
        {formType !== "code" ? (
          <>
            <div>Don't have an account?</div>
            <a>Register</a>
          </>
        ) : (
          <>
            <a onClick={backToLogin}> Back to Login </a>
          </>
        )}
      </div>
    </>
  );
};
