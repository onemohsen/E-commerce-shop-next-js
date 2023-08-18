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
        <a className="cursor-pointer text-blue-500" onClick={onClickHandler}>
          {text}
        </a>
      </li>
    </>
  );
}
