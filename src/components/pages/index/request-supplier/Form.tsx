import PrimaryButton from "@/components/commons/button/PrimaryButton";
import Input from "@/components/commons/input/Input";
import SelectBox from "@/components/commons/input/SelectBox";
import { useToast } from "@/hooks/useToast";
import React, { MouseEvent, useState, ChangeEvent } from "react";

export default function Form() {
  const classInpute = "border border-blue-200 rounded";

  const options = ["pc", "laptop", "phone"];
  type Options = (typeof options)[number];

  const [form, setForm] = useState<{
    description: string;
    quentity: number | null;
    category: Options;
  }>({
    description: "",
    quentity: null,
    category: "",
  });

  const { showToast } = useToast();

  const formSubmitHandler = (event: MouseEvent) => {
    event.preventDefault();
    showToast("danger", `${form.description} ${form.quentity}`);
  };

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
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setForm((prevState) => ({
            ...prevState,
            description: event.target.value,
          }))
        }
      />

      <div className="space-x-2">
        <Input
          type="number"
          className={classInpute}
          placeholder="Quantity"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm((prevState) => ({
              ...prevState,
              quentity: +event.target.value,
            }))
          }
        />

        <SelectBox className={`${classInpute} bg-white focus:outline-none`}>
          {options.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </SelectBox>
      </div>

      <PrimaryButton
        title="Send inquiry"
        customClass="w-32"
        type="button"
        onClick={formSubmitHandler}
      />
    </form>
  );
}
