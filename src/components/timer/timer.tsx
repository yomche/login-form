import styles from "./timet.module.scss";
import cn from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";

export const Timer = ({ resetFields }: { resetFields: () => void }) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [seconds, setSeconds] = useState<number>(5);

  useEffect(() => {
    if (seconds) {
      timerRef.current = setTimeout(() => {
        setSeconds((prev) => (prev -= 1));
      }, 1000);
    }

    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [seconds]);

  const statusMessage = useMemo(() => {
    const statusDetails = {
      timeout: (
        <>
          Send code in <p>{seconds}</p> seconds
        </>
      ),
      retry: "Resend code",
    };
    const status: keyof typeof statusDetails = seconds ? "timeout" : "retry";

    return status ? (
      <div
        className={cn(styles.statusText, styles[status])}
        onClick={() => {
          if (status === "retry") {
            setSeconds(5);
            resetFields();
          }
        }}
      >
        {statusDetails[status]}
      </div>
    ) : null;
  }, [seconds]);

  return <div className={styles.timer}>{statusMessage}</div>;
};
