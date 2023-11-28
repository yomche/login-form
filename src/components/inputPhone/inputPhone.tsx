import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles.css";

interface MaskedPhoneProps {
  value?: string;
  handleValueChange?: () => void;
}

export const InputPhone = ({ value, handleValueChange }: MaskedPhoneProps) => {
  return (
    <>
      <PhoneInput
        specialLabel={""}
        country={"us"}
        value={value}
        onChange={handleValueChange}
      />
    </>
  );
};
