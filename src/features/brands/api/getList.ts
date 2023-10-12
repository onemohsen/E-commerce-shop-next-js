import { config } from "@/utils/config";

export const getList = async () => {
  return await fetch(`${config.baseUrl}/brands`);
};
