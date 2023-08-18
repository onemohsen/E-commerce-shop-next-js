import React from "react";
import PrimaryButton from "./button/PrimaryButton";
import TextInput from "./input/TextInput";

const Subscribe = () => {
  return (
    <div className="flex flex-col space-y-3 text-center">
      <span className="font-bold">Subscribe on our newsletter</span>
      <span>
        Get daily news on upcoming offers from many suppliers all over the world
      </span>
      <div>
        <TextInput name="test" id="test" placeholder="Email" />
        <PrimaryButton title="Subscribe" />
      </div>
    </div>
  );
};

export default Subscribe;
