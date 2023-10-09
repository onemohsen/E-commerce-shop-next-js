import { useProductPageContext } from "../hooks/useProductPageContext";
import Dropdown from "./Dropdown";

export function FilterSidebar() {
  const { filtersData } = useProductPageContext();

  return (
    <div className="flex-inline w-1/5 space-y-1">
      {Object.keys(filtersData).map((key, index) => {
        return (
          <div key={`${key}-${index}`}>
            <p className="w-full border" />
            <Dropdown header={key} item={filtersData[key]} />
          </div>
        );
      })}
    </div>
  );
}
