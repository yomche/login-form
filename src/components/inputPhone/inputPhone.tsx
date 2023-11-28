import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles.css";

interface MaskedPhoneProps {
  value?: string;
  handleValueChange?: (value: string) => void;
}

export const InputPhone = ({ value, handleValueChange }: MaskedPhoneProps) => {
  return (
    <>
      <PhoneInput
        specialLabel={"Phone"}
        country={"us"}
        value={value}
        onChange={handleValueChange}
      />
    </>
  );
};
