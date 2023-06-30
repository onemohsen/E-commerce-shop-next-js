import React from "react";

type Props = {
  showMore: boolean;
  onClickHandler: () => void;
};

export default function DropdownLessAndMore({
  showMore,
  onClickHandler,
}: Props) {
  const text = showMore ? "See all" : "Less";

  return (
    <>
      <li className="pb-4">
        <a className="text-blue-500 cursor-pointer" onClick={onClickHandler}>
          {text}
        </a>
      </li>
    </>
  );
}
