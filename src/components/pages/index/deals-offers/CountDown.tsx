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
      <div className={boxClassName}>
        <span className={countDownClass}>{days}</span>
        <span className={textCountDownClass}>days</span>
      </div>
      <div className={boxClassName}>
        <span className={countDownClass}>{hours}</span>
        <span className={textCountDownClass}>hour</span>
      </div>
      <div className={boxClassName}>
        <span className={countDownClass}>{minutes}</span>
        <span className={textCountDownClass}>min</span>
      </div>
      <div className={boxClassName}>
        <span className={countDownClass}>{seconds}</span>
        <span className={textCountDownClass}>sec</span>
      </div>
    </div>
  );
};

export default CountDown;
