import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { FC, createContext, useState } from "react";

type StateType = {
  categories: Category[];
};

type GlobalContextType = {
  data: StateType;
  setData: (data: StateType) => void;
};

type Props = {
  children: React.ReactNode;
};

const state: StateType = {
  categories: [],
};

export const GlobalContext = createContext<GlobalContextType>({
  data: state,
  setData: () => {},
});

export const GlobalState: FC<Props> = (props) => {
  const [data, setState] = useState<StateType>(state);

  const setData = (data: StateType) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  return (
    <>
      <GlobalContext.Provider value={{ data, setData }}>
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};
