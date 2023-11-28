import { useEffect, useState } from "react";

export const useForm = () => {
  const [formFields, setFormFields] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({ email: false, password: false });

  const isEmailValid = (email: string) =>
    // eslint-disable-next-line no-useless-escape
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : false;

  const onFormChange = (name: string, value: string) => {
    setFormFields((prev) => ({ ...prev, [name]: value }));
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

  return { formFields, formError, onEmailChange, onPasswordChange, isValid };
};
