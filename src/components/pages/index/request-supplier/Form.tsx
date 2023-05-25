import PrimaryButton from "@/components/commons/button/PrimaryButton";
import Input from "@/components/commons/input/Input";
import SelectBox from "@/components/commons/input/SelectBox";
import React from "react";

export default function Form() {
  const classInpute = "border border-blue-200 rounded";

  const options = ["pc", "laptop", "phone"];

  return (
    <form className="bg-white rounded p-8 flex flex-col space-y-5">
      <span>Send quote to suppliers</span>
      <Input
        type="text"
        disabled
        value="what item you need ?"
        className={classInpute}
      />

      <Input
        type="textarea"
        rows="3"
        className={classInpute}
        placeholder="Type more details"
      />

      <div className="space-x-2">
        <Input type="number" className={classInpute} placeholder="Quantity" />

        <SelectBox className={`${classInpute} bg-white focus:outline-none`}>
          {options.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </SelectBox>
      </div>

      <PrimaryButton title="Send inquiry" customClass="w-32" />
    </form>
  );
}
