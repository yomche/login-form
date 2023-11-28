import styles from "./phone.module.scss";
import { Button } from "../../button";
import { InputPhone } from "../../inputPhone";

interface PhoneFormProps {
  phoneField: string;
  handlePhoneField: (value: string) => void;
  handleLogin: () => void;
}

export const PhoneForm = ({
  phoneField,
  handlePhoneField,
  handleLogin,
}: PhoneFormProps) => {
  return (
    <>
      <InputPhone
        value={phoneField}
        handleValueChange={(phone) => handlePhoneField(phone)}
      />
      <div className={styles.button}>
        <Button disabled={phoneField.length < 9} onClick={handleLogin}>
          Send code
        </Button>
      </div>
    </>
  );
};
