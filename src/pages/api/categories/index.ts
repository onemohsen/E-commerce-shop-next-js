import { JsonRespone } from "../../../models/Types";
import { Category } from "../../../models/Category";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JsonRespone>
) {

  if (req.method !== "GET") res.status(404).json({ message: "only Get method is supported", statusCode: res.statusCode });

  let imageQuilty: string = '900';
  let fields: string[] = [];

  if (typeof req.query.imageQuilty == 'string') imageQuilty = req.query.imageQuilty.split(',')[0];
  if (typeof req.query.fields == 'string') fields = req.query.fields.split(',');


  let categories: Category[] = getData(imageQuilty);

  if (Object.values(fields).length > 0) {
    categories = filterFieldsCategory(categories, fields);
  }

  const response: JsonRespone = {
    data: categories,
    message: "categories get successfully",
    statusCode: res.statusCode,
  };


  return res.json(response);
}


const getData = (imageQuilty: string) => [
  { id: 1, name: "Automobiles", image: `https://picsum.photos/id/1/${imageQuilty}` },
  { id: 2, name: "Clothes and wear", image: `https://picsum.photos/id/2/${imageQuilty}` },
  { id: 3, name: "Home interiors", image: `https://picsum.photos/id/3/${imageQuilty}` },
  { id: 4, name: "Computer and tech", image: `https://picsum.photos/id/4/${imageQuilty}` },
  { id: 5, name: "Tools, equipments", image: `https://picsum.photos/id/5/${imageQuilty}` },
  {
    id: 6,
    name: "Sports and outdoor",
    image: `https://picsum.photos/id/6/${imageQuilty}`,
  },
  { id: 7, name: "Animal and pets", image: `https://picsum.photos/id/7/${imageQuilty}` },
  { id: 8, name: "Machinery tools", image: `https://picsum.photos/id/8/${imageQuilty}` },
  { id: 9, name: "More category", image: `https://picsum.photos/id/9/${imageQuilty}` },
  { id: 10, name: "Mobile accessory", image: `https://picsum.photos/id/10/${imageQuilty}`, },
  { id: 11, name: "Electronics", image: `https://picsum.photos/id/11/${imageQuilty}`, },
  { id: 12, name: "Smartphones", image: `https://picsum.photos/id/12/${imageQuilty}`, },
  { id: 13, name: "Modern tech", image: `https://picsum.photos/id/13/${imageQuilty}`, },
  { id: 14, name: "Mobile accessory", image: `https://picsum.photos/id/14/${imageQuilty}`, },
];

type CategoryFilterFields = Category & { [k: string]: any }
const filterFieldsCategory = (categories: CategoryFilterFields[], fields: string[]) => {
  return categories.map((category, index) => {
    const newCategory: { [k: string]: any } = {};
    fields.forEach((field) => {
      newCategory[field] = category[field];
    })
    return newCategory as Category;
  });

}