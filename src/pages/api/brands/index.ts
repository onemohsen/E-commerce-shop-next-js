import { JsonRespone, MetaRespone } from "../../../models/Types";
import { Brand } from "../../../models/Brand";
import { NextApiRequest, NextApiResponse } from "next";
import { QueryParamsClass } from "@/services/class/QueryParamsClass";
import { FilterDataClass } from "@/services/class/FilterDataClass";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<JsonRespone>
) {

    if (req.method !== "GET") res.status(404).json({ message: "only Get method is supported", statusCode: res.statusCode });

    const { imageQuilty } = (new QueryParamsClass(req.query)).getParams();

    let filterDataInstance = new FilterDataClass<Brand>(getData(imageQuilty!), { ...req.query });

    let { data, meta }: { data: Brand[] | [], meta: MetaRespone } = filterDataInstance.get();


    const metaData = (typeof meta !== 'undefined') ? { meta } : {};

    const response: JsonRespone = {
        data: data,
        message: "brands get successfully",
        statusCode: res.statusCode,
        ...metaData,
    }

    return res.json(response);

}


const getData = (imageQuilty: string) => [
    { id: 1, name: "Samsung", image: `https://picsum.photos/id/1/${imageQuilty}` },
    { id: 2, name: "Apple", image: `https://picsum.photos/id/2/${imageQuilty}` },
    { id: 3, name: "Huawei", image: `https://picsum.photos/id/3/${imageQuilty}` },
    { id: 4, name: "Pocco", image: `https://picsum.photos/id/4/${imageQuilty}` },
    { id: 5, name: "Lenovo", image: `https://picsum.photos/id/5/${imageQuilty}` },
    { id: 6, name: "test2", image: `https://picsum.photos/id/6/${imageQuilty}` },
    { id: 7, name: "test3", image: `https://picsum.photos/id/7/${imageQuilty}` },
];
