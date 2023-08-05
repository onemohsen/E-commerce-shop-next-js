import React from "react";
import Star from "../icons/Star";
import { ShapeStartIconType } from "@/models/Types";

type Props = {
  score: number;
  fullScore?: number;
};

export default function StarIconBox({ score, fullScore = 10 }: Props) {
  const starCount = 5;

  const valueOfEachStart = fullScore / starCount;

  const colorClass = "text-red-500";

  const getShape: (numberStar: number) => ShapeStartIconType = (index) => {
    const numberStar = index + 1;
    const scoreThisStar = numberStar * valueOfEachStart;

    if (scoreThisStar > score && scoreThisStar < score + valueOfEachStart) {
      return "half";
    }

    if (scoreThisStar <= score) {
      return "full";
    }

    return "empty";
  };

  const makeStartIcon = (index: number) => {
    const shape = getShape(index);
    const classShape = `${
      shape !== "empty" ? "fill-red-500" : "fill-gray-400"
    } w-5 h-5 ${colorClass}`;

    return <Star key={index} className={classShape} shape={shape} />;
  };

  const stars = Array.from({ length: starCount }, (_, index) =>
    makeStartIcon(index),
  );

  return (
    <div className="flex space-x-2">
      <div className="flex">{stars}</div>
      {score !== 0 && <span className={colorClass}>{score}</span>}
    </div>
  );
}
