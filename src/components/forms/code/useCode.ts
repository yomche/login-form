import { useState, useEffect } from "react";

export const useCode = () => {
  const [code, setCode] = useState<string | null>(null);
  const [digit1, setDigit1] = useState<string>("");
  const [digit2, setDigit2] = useState<string>("");
  const [digit3, setDigit3] = useState<string>("");
  const [digit4, setDigit4] = useState<string>("");
  const digitsState: { digit: string; setDigit: (value: string) => void }[] =
    [];

  for (let i = 0; i < 4; i++) {
    const digitState = [
      { digit: digit1, setDigit: setDigit1 },
      { digit: digit2, setDigit: setDigit2 },
      { digit: digit3, setDigit: setDigit3 },
      { digit: digit4, setDigit: setDigit4 },
    ];
    digitsState.push({
      digit: digitState[i].digit,
      setDigit: digitState[i].setDigit,
    });
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const entry = event.target.value as string;

    if (entry.length <= 1 && !Number.isNaN(entry)) {
      digitsState[index].setDigit(event.target.value);

      if (entry.length === 1) {
        if (index < 3) {
          const nextInput =
            document.querySelectorAll<HTMLInputElement>(`.code-digit`)[
              index + 1
            ];
          if (nextInput.value === "") nextInput.focus();
        } else {
          const currInput =
            document.querySelectorAll<HTMLInputElement>(`.code-digit`)[index];
          currInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    ["e", "E", "+", "-", "."].includes(event.key) && event.preventDefault();

    if (event.key === "Backspace") {
      const prevInput =
        document.querySelectorAll<HTMLInputElement>(`.code-digit`)[index - 1];
      digitsState[index].setDigit("");

      if (digitsState[index].digit === "") prevInput.focus();
    }
  };

  useEffect(() => {
    const finalCode = digitsState
      .map((input) => {
        return input.digit;
      })
      .join("");

    if (finalCode.length === 4) {
      setCode(finalCode);
    } else setCode(null);
  }, [digitsState]);

  return { code, digitsState, handleChange, handleKeyDown };
};
