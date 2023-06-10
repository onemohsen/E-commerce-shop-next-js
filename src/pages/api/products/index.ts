import { JsonRespone } from "../../../models/Types";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@/models/Product";
import { FilterData } from "@/services/class/FilterData";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<JsonRespone>
) {

    if (req.method !== "GET") res.status(404).json({ message: "only Get method is supported", statusCode: res.statusCode });

    let imageQuilty: string = '900';
    let fields: string[] = [];

    if (typeof req.query.imageQuilty == 'string') imageQuilty = req.query.imageQuilty.split(',')[0];
    if (typeof req.query.fields == 'string') fields = req.query.fields.split(',');

    let filterDataInstance = new FilterData<Product>(getData(imageQuilty), { ...req.query });

    let products: Product[] | [] = filterDataInstance.getData();
    // let products: Product[] | [] = getData(imageQuilty);

    /* if (Object.values(fields).length > 0) {
        products = filterFieldsProduct(products, fields);
    } */

    const response: JsonRespone = {
        data: products,
        message: "products get successfully",
        statusCode: res.statusCode,
    };


    return res.json(response);
}




const getData: (imageQuilty: string) => Product[] = (imageQuilty = '500') => [
    {
        id: 1,
        title: 'product1',
        image: `https://picsum.photos/id/1/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            },
            {
                id: 2,
                name: 'Electronics',
            }
        ],
    },
    {
        id: 2,
        title: 'product2',
        image: `https://picsum.photos/id/2/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Electronics',
            }
        ],
    },
    {
        id: 3,
        title: 'product3',
        image: `https://picsum.photos/id/3/${imageQuilty}`,
        price: 1500,
    },
    {
        id: 4,
        title: 'product4',
        image: `https://picsum.photos/id/4/${imageQuilty}`,
        price: 1500,
    },
    {
        id: 5,
        title: 'product5',
        image: `https://picsum.photos/id/5/${imageQuilty}`,
        price: 1500,
    }

];

type ProductFilterFields = Product & { [k: string]: any }
const filterFieldsProduct = (products: ProductFilterFields[], fields: string[]) => {
    return products.map((product, index) => {
        const newProduct: { [k: string]: any } = {};
        fields.forEach((field) => {
            newProduct[field] = product[field];
        })
        return newProduct as Product;
    });

}

/* const filterCategories = (products: Product[], categories: string[]) => {

    return products.filter((product, index) => {
        return categories.includes(product.categories[0].name)
    }
} */