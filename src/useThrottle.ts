import { useState, useCallback } from "react";

export default function useThrottle(
  callback: (param: any) => void,
  delay: number
) {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttle = useCallback(
    (...args: any[]) => {
      if (!isThrottled) {
        setIsThrottled(true);
        setTimeout(() => {
          callback(args[0]);
          setIsThrottled(false);
          console.log("throttled", args); //Отслеживание задержки вызова
        }, delay);
      }
    },
    [callback, delay, isThrottled]
  );

  return throttle;
}
