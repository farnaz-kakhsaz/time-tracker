import { useEffect, useState } from "react";

export const useTime = (timeFromId = 0) => {
  const [time, setTime] = useState(timeFromId);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return [time, setTime, timerOn, setTimerOn];
};
