import { useState } from "react";
import { useEffect } from "react";

const Countdown = () => {
  const DURATION = 5 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let deadline = sessionStorage.getItem("timerSeat");

    if (!deadline) {
      deadline = Date.now() + DURATION;
      sessionStorage.setItem("timerSeat", deadline);
    }

    const updateTimer = () => {
      const remaining = Math.max(0, Math.floor((deadline - Date.now()) / 1000));

      setTimeLeft(remaining);

      if (remaining === 0) {
        sessionStorage.removeItem("timerSeat");
        clearInterval(timer);
        // onExprire?.();
      }
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [DURATION]);

  const timeFormat = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };
  return (
    <div className="flex items-center gap-1">
      <span className="text-base font-normal">THỜI GIAN GIỮ VÉ:</span>
      <span className="px-2 py-1 bg-primary rounded text-lg font-extrabold">
        {timeFormat(timeLeft)}
      </span>
    </div>
  );
};

export default Countdown;
