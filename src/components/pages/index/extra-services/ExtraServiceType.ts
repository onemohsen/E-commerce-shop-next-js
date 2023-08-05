import { StaticImageData } from "next/image";

export type ExtraServiceType = {
  image: StaticImageData;
  description: string;
  icon: () => JSX.Element;
};
