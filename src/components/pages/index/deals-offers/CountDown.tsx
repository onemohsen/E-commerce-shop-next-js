import { useCountdown } from "@/hooks/useCountDown";
import React from "react";

type Props = {
  date: Date;
  className?: string;
};

const boxClassName =
  "bg-stone-600 text-white px-3 py-1 rounded flex flex-col items-center";
const textCountDownClass = "text-xs";
const countDownClass = "font-bold";

const CountDown = ({ date, className }: Props) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  return (
    <div className={`${className}`}>
      <p className={boxClassName}>
        <span className={countDownClass}>{days}</span>
        <span className={textCountDownClass}>days</span>
      </p>
      <p className={boxClassName}>
        <span className={countDownClass}>{hours}</span>
        <span className={textCountDownClass}>hour</span>
      </p>
      <p className={boxClassName}>
        <span className={countDownClass}>{minutes}</span>
        <span className={textCountDownClass}>min</span>
      </p>
      <p className={boxClassName}>
        <span className={countDownClass}>{seconds}</span>
        <span className={textCountDownClass}>sec</span>
      </p>
    </div>
  );
};

export default CountDown;
