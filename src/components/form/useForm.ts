import { useEffect, useState } from "react";

export const useForm = () => {
  const [formType, setFormType] = useState<"email" | "phone" | "code">("email");
  const [formFields, setFormFields] = useState({ email: "", password: "" });
  const [phoneField, setPhoneField] = useState("");
  const [codeData, setCodeData] = useState("");
  const [formError, setFormError] = useState({ email: false, password: false });

  const isEmailValid = (email: string) =>
    // eslint-disable-next-line no-useless-escape
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : false;

  const onFormChange = (name: string, value: string) => {
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitch = (type: string) => {
    type === "email" ? setFormType("phone") : setFormType("email");
  };

  const onEmailChange = (name: string, value: string) => {
    !isEmailValid(value)
      ? setFormError({ ...formError, email: true })
      : setFormError({ ...formError, email: false });
    onFormChange(name, value);
  };

  const onPasswordChange = (name: string, value: string) => {
    value.length < 8
      ? setFormError({ ...formError, password: true })
      : setFormError({ ...formError, password: false });
    onFormChange(name, value);
  };

  const isValid =
    formFields.email !== "" &&
    isEmailValid(formFields.email) &&
    formFields.password.length >= 8;

  useEffect(() => {
    if (formFields.email === "") {
      setFormError({ ...formError, email: false });
    } else if (formFields.password === "") {
      setFormError({ ...formError, password: false });
    }
  }, [formFields]);

  const backToLogin = () => {
    setFormType("email");
    setPhoneField("");
    setFormFields({ email: "", password: "" });
  };

  const handleLogin = () => {
    if (formType === "email") {
      setPhoneField("");
      setCodeData(formFields.email);
    }
    if (formType === "phone") {
      setFormFields({ email: "", password: "" });
      setCodeData(phoneField);
    }

    setFormType("code");
  };

  return {
    formFields,
    formError,
    onEmailChange,
    onPasswordChange,
    isValid,
    formType,
    setFormType,
    phoneField,
    handlePhoneField: setPhoneField,
    handleLogin,
    codeData,
    handleSwitch,
    backToLogin,
  };
};
