import { JsonRespone } from "../../../models/Types";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@/models/Product";
import { FilterData } from "@/services/class/FilterData";
import { features } from "process";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<JsonRespone>
) {

    if (req.method !== "GET") res.status(404).json({ message: "only Get method is supported", statusCode: res.statusCode });

    let imageQuilty: string = '900';

    if (typeof req.query.imageQuilty == 'string') imageQuilty = req.query.imageQuilty.split(',')[0];

    let filterDataInstance = new FilterData<Product>(getData(imageQuilty), { ...req.query });

    let products: Product[] | [] = filterDataInstance.getData();


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
        title: 'accessory1 (samsung,huawei) (Metalic,8GB Ram,Supet power,Large Memory,)',
        image: `https://picsum.photos/id/1/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ],
        features: [
            {
                id: 1,
                name: 'Metalic'
            },
            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 4,
                name: 'Supet power'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 2,
        title: 'accessory2 (Huawei)',
        image: `https://picsum.photos/id/2/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 3,
        title: 'accessory3 (Huawei)',
        image: `https://picsum.photos/id/3/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 4,
        title: 'accessory4 (Poco)',
        image: `https://picsum.photos/id/4/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 4,
                'name': 'Poco'
            }
        ]
    },
    {
        id: 5,
        title: 'accessory5 (Lenovo)',
        image: `https://picsum.photos/id/5/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 5,
                'name': 'Lenovo'
            }
        ]
    },
    {
        id: 6,
        title: 'accessory6 (test2)',
        image: `https://picsum.photos/id/6/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 6,
                'name': 'test2'
            }
        ]
    },
    {
        id: 7,
        title: 'accessory7 (test3)',
        image: `https://picsum.photos/id/7/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 7,
                'name': 'test3'
            }
        ]
    },
    {
        id: 8,
        title: 'accessory8 (Samsung)',
        image: `https://picsum.photos/id/8/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            }
        ]
    },
    {
        id: 9,
        title: 'accessory9 (Samsung,Huawei)',
        image: `https://picsum.photos/id/9/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 10,
        title: 'accessory10 (Samsung,Huawei)',
        image: `https://picsum.photos/id/10/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 1,
                name: 'Mobile accessory',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 11,
        title: 'electronics11 (Samsung,Huawei)',
        image: `https://picsum.photos/id/11/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 12,
        title: 'electronics12 (Samsung,Huawei)',
        image: `https://picsum.photos/id/12/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 13,
        title: 'electronics13 (Huawei)',
        image: `https://picsum.photos/id/13/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 14,
        title: 'electronics14 (Huawei)',
        image: `https://picsum.photos/id/14/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 15,
        title: 'electronics15 (Samsung)',
        image: `https://picsum.photos/id/15/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ]
    },
    {
        id: 16,
        title: 'electronics16 (Samsung)',
        image: `https://picsum.photos/id/16/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ]
    },
    {
        id: 17,
        title: 'electronics17 (Samsung)',
        image: `https://picsum.photos/id/17/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ]
    },
    {
        id: 18,
        title: 'electronics18 (Samsung)',
        image: `https://picsum.photos/id/18/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ]
    },
    {
        id: 19,
        title: 'electronics19 (Samsung)',
        image: `https://picsum.photos/id/19/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ]
    },
    {
        id: 20,
        title: 'electronics20 (Samsung)',
        image: `https://picsum.photos/id/20/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ]
    },
    {
        id: 21,
        title: 'electronics21 (Samsung)',
        image: `https://picsum.photos/id/21/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ]
    },
    {
        id: 22,
        title: 'electronics22 (Apple) (Metalic,8GB Ram,Supet power,Large Memory,)',
        image: `https://picsum.photos/id/22/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 2,
                name: 'Electronics',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Apple'
            },
        ],
        features: [
            {
                id: 1,
                name: 'Metalic'
            },
            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 4,
                name: 'Supet power'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 23,
        title: 'smartphones23 (Apple) (8GB Ram)',
        image: `https://picsum.photos/id/23/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Apple'
            },
        ],
        features: [
            {
                id: 3,
                name: '8GB Ram'
            }
        ],
    },
    {
        id: 24,
        title: 'smartphones24 (Apple) (,Supet power)',
        image: `https://picsum.photos/id/24/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Apple'
            },
        ],
        features: [
            {
                id: 4,
                name: 'Supet power'
            }
        ],
    },
    {
        id: 25,
        title: 'smartphones25 (Apple)(Large Memory,)',
        image: `https://picsum.photos/id/25/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Apple'
            },
        ],
        features: [
            {
                id: 5,
                name: 'Large Memory'
            }
        ],
    },
    {
        id: 26,
        title: 'smartphones26 (Apple)(Large Memory,Supet power)',
        image: `https://picsum.photos/id/26/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Apple'
            },
        ],
        features: [
            {
                id: 4,
                name: 'Supet power'
            },
            {
                id: 5,
                name: 'Large Memory'
            }
        ],
    },
    {
        id: 27,
        title: 'smartphones27 (Apple)',
        image: `https://picsum.photos/id/27/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Apple'
            },
        ]
    },
    {
        id: 28,
        title: 'smartphones28 (Apple)',
        image: `https://picsum.photos/id/28/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Apple'
            },
        ]
    },
    {
        id: 29,
        title: 'smartphones29 (Apple)',
        image: `https://picsum.photos/id/29/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 2,
                'name': 'Apple'
            },
        ]
    },
    {
        id: 30,
        title: 'smartphones30 (Samsung)',
        image: `https://picsum.photos/id/30/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ]
    },
    {
        id: 31,
        title: 'smartphones31 (Samsung)(8GB Ram,large Memory)',
        image: `https://picsum.photos/id/31/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ],
        features: [

            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 32,
        title: 'smartphones32 (Samsung)(8GB Ram,Large Memory)',
        image: `https://picsum.photos/id/32/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 3,
                name: 'Smartphones',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
        ],
        features: [

            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 33,
        title: 'tech-33 (Poco)',
        image: `https://picsum.photos/id/33/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 4,
                'name': 'Poco'
            },
        ]
    },
    {
        id: 34,
        title: 'tech-34 (Poco)',
        image: `https://picsum.photos/id/34/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 4,
                'name': 'Poco'
            },
        ]
    },
    {
        id: 35,
        title: 'tech-35 ()',
        image: `https://picsum.photos/id/35/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
    },
    {
        id: 36,
        title: 'tech-36 (Poco)',
        image: `https://picsum.photos/id/36/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 4,
                'name': 'Poco'
            },
        ]
    },
    {
        id: 37,
        title: 'tech-37 (Poco)',
        image: `https://picsum.photos/id/37/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 4,
                'name': 'Poco'
            },
        ]
    },
    {
        id: 38,
        title: 'tech-38 (Poco)',
        image: `https://picsum.photos/id/38/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 4,
                'name': 'Poco'
            },
        ]
    },
    {
        id: 39,
        title: 'tech-39 (Samsung,Huawei)',
        image: `https://picsum.photos/id/39/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 40,
        title: 'tech-40 (Samsung,Huawei)',
        image: `https://picsum.photos/id/40/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 41,
        title: 'tech-41 (Samsung,Huawei)',
        image: `https://picsum.photos/id/41/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 42,
        title: 'tech-42 (Samsung,Huawei)(8GB Ram,Large Memory)',
        image: `https://picsum.photos/id/42/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ],
        features: [

            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 43,
        title: 'test1-43 (Samsung,Huawei,Apple)',
        image: `https://picsum.photos/id/43/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 5,
                name: 'test1',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Apple'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 44,
        title: 'test1-44 (Samsung,Huawei) (8GB Ram,Large Memory)',
        image: `https://picsum.photos/id/44/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 5,
                name: 'test1',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },

            {
                id: 3,
                'name': 'Huawei'
            }
        ],
        features: [

            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 45,
        title: 'test1-45 (Samsung,Huawei)',
        image: `https://picsum.photos/id/45/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 5,
                name: 'test1',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            },
        ]
    },
    {
        id: 46,
        title: 'test2-46 (Samsung,Huawei)',
        image: `https://picsum.photos/id/46/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 6,
                name: 'test2',
            }
        ],
        brands: [
            {
                id: 1,
                'name': 'Samsung'
            },
            {
                id: 3,
                'name': 'Huawei'
            }
        ]
    },
    {
        id: 47,
        title: 'test2-47',
        image: `https://picsum.photos/id/47/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 6,
                name: 'test2',
            }
        ],
    },
    {
        id: 48,
        title: 'test3-48',
        image: `https://picsum.photos/id/48/${imageQuilty}`,
        price: 1500,
        categories: [
            {
                id: 7,
                name: 'test3',
            }
        ],
    },
    {
        id: 49,
        title: 'no category-49 (8GB Ram,Large Memory)',
        image: `https://picsum.photos/id/49/${imageQuilty}`,
        price: 1500,
        features: [

            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 50,
        title: 'no category-50 (8GB Ram,Large Memory)',
        image: `https://picsum.photos/id/50/${imageQuilty}`,
        price: 1500,
        features: [

            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 51,
        title: 'no category-51 (8GB Ram,Large Memory)',
        image: `https://picsum.photos/id/51/${imageQuilty}`,
        price: 1500,
        features: [

            {
                id: 3,
                name: '8GB Ram'
            },
            {
                id: 5,
                name: 'Large Memory'
            },
        ],
    },
    {
        id: 52,
        title: 'no category-52 (test2)',
        image: `https://picsum.photos/id/52/${imageQuilty}`,
        price: 1500,
        features: [

            {
                id: 6,
                name: 'test2'
            }
        ],
    },
    {
        id: 53,
        title: 'no category-53 (test3)',
        image: `https://picsum.photos/id/53/${imageQuilty}`,
        price: 1500,
        features: [

            {
                id: 7,
                name: 'test3'
            }
        ],
    },
    {
        id: 54,
        title: 'no category-54',
        image: `https://picsum.photos/id/54/${imageQuilty}`,
        price: 1500,
    },

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