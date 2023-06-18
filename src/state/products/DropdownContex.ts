import { createContext } from "react";

type DropdowContextType = {
    maxItems: number;
    setMaxItems: React.Dispatch<React.SetStateAction<number>>;
    showDropdown: boolean;
    setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    filterQuery: (query: number[]) => void;
};

const initialDropdowContext: DropdowContextType = {
    maxItems: 0,
    setMaxItems: () => { },
    showDropdown: true,
    setShowDropdown: () => { },
    filterQuery: () => { },
};

export const DropdowContext = createContext<DropdowContextType>(
    initialDropdowContext
);