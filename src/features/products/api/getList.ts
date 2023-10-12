import { ParamsType } from "@/models/Model";
import { Product } from "@/models/Product";
import { config } from "@/utils/config";

export const getList = async (queryString?: string) => {
  return await fetch(
    `${config.baseUrl}/products${queryString ? queryString : ""}`,
  );
};

export const getListModel = async (params: ParamsType) => {
  const query = new Product();

  if (params.filter) {
    Object.keys(params.filter).forEach((filterKey) => {
      query.where(filterKey, params.filter?.[filterKey]);
    });
  }

  if (params.param) {
    query.param(params.param);
  }
  if (params.limit) {
    query.limit(params.limit);
  }
  if (params.paginate) {
    query.paginate(params.paginate);
  }

  return await query.get();
};
