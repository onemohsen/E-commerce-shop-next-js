import { JsonRespone, MetaRespone } from "../../../models/Types";
import { Category } from "../../../models/Category";
import { NextApiRequest, NextApiResponse } from "next";
import { QueryParamsClass } from "@/utils/QueryParamsClass";
import { FilterDataClass } from "@/utils/FilterDataClass";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JsonRespone>,
) {
  if (req.method !== "GET")
    res.status(404).json({
      message: "only Get method is supported",
      statusCode: res.statusCode,
    });

  const { imageQuilty } = new QueryParamsClass(req.query).getParams();

  let filterDataInstance = new FilterDataClass<Category>(
    getData(imageQuilty!),
    { ...req.query },
  );

  let { data, meta }: { data: Category[] | []; meta: MetaRespone } =
    filterDataInstance.get();

  const metaData = typeof meta !== "undefined" ? { meta } : {};

  const response: JsonRespone = {
    data: data,
    message: "categories get successfully",
    statusCode: res.statusCode,
    ...metaData,
  };

  return res.json(response);
}

const getData = (imageQuilty: string) => [
  { id: 1, name: "Mobile", image: `https://picsum.photos/id/1/${imageQuilty}` },
  {
    id: 2,
    name: "Electronics",
    image: `https://picsum.photos/id/2/${imageQuilty}`,
  },
  {
    id: 3,
    name: "Smartphones",
    image: `https://picsum.photos/id/3/${imageQuilty}`,
  },
  {
    id: 4,
    name: "Modern tech",
    image: `https://picsum.photos/id/4/${imageQuilty}`,
  },
  { id: 5, name: "test1", image: `https://picsum.photos/id/5/${imageQuilty}` },
  { id: 6, name: "test2", image: `https://picsum.photos/id/6/${imageQuilty}` },
  { id: 7, name: "test3", image: `https://picsum.photos/id/7/${imageQuilty}` },
];
