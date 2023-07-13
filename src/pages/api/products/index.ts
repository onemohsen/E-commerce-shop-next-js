import { QueryParamsClass } from './../../../services/class/QueryParamsClass';
import { MetaRespone } from './../../../models/Types';
import { JsonRespone } from "../../../models/Types";
import { NextApiRequest, NextApiResponse } from "next";
import { ProductType } from "@/models/Product";
import { FilterDataClass } from "@/services/class/FilterDataClass";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<JsonRespone>
) {

    if (req.method !== "GET") res.status(404).json({ message: "only Get method is supported", statusCode: res.statusCode });

    const { imageQuilty, page, perPage } = (new QueryParamsClass(req.query, { perPage: "6" })).getParams();

    let hasPaginate = (req.query?.paginate && req.query.paginate == 'false') ? false : true;

    let params = req.query;

    let filters = {};
    Object.keys(params).forEach((key) => {
        if (key.includes('filter')) {
            let filterKey = key.split('filter[')[1].split(']')[0];
            let filterValue = params[key];

            let values = params[key] as string;
            let valuesArray = values.split(',');
            if (valuesArray.length > 1) {
                filterValue = valuesArray;
            }

            filters = { ...filters, [filterKey]: filterValue }
            delete params[key];
        }
    });

    params = {
        ...params,
        ...hasPaginate ? { page, perPage } : {},
    };

    let filterDataInstance = new FilterDataClass<ProductType>(getData(imageQuilty!), params, filters);

    let { data, meta }: { data: ProductType[] | [], meta: MetaRespone } = filterDataInstance.get();

    const metaData = (typeof meta !== 'undefined') ? { meta } : {};

    const response: JsonRespone = {
        data: data,
        message: "products get successfully",
        statusCode: res.statusCode,
        ...metaData,
    }


    return res.json(response);
}




// eslint-disable-next-line no-unused-vars
const getData: (imageQuilty: string) => ProductType[] = (imageQuilty = '500') => [
    {
        id: 1,
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 1,
        title: 'accessory1 (samsung,huawei) (Metalic,8GB Ram,Supet power,Large Memory,)',
        quantity: 2,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 2,
        title: 'accessory2 (Huawei)',
        quantity: 2,
        image: `https://picsum.photos/id/2/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 3,
        title: 'accessory3 (Huawei)',
        quantity: 0,
        image: `https://picsum.photos/id/3/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        id: 4,
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 4,
        title: 'accessory4 (Poco)',
        quantity: 0,
        image: `https://picsum.photos/id/4/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 5,
        title: 'accessory5 (Lenovo)',
        quantity: 0,
        image: `https://picsum.photos/id/5/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 6,
        title: 'accessory6 (test2)',
        quantity: 0,
        image: `https://picsum.photos/id/6/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 7,
        title: 'accessory7 (test3)',
        quantity: 0,
        image: `https://picsum.photos/id/7/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 8,
        title: 'accessory8 (Samsung)',
        quantity: 0,
        image: `https://picsum.photos/id/8/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 9,
        title: 'accessory9 (Samsung,Huawei)',
        quantity: 0,
        image: `https://picsum.photos/id/9/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 10,
        title: 'accessory10 (Samsung,Huawei)',
        quantity: 0,
        image: `https://picsum.photos/id/10/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 10,
        title: 'electronics11 (Samsung,Huawei)',
        quantity: 0,
        image: `https://picsum.photos/id/11/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 2,
        title: 'electronics12 (Samsung,Huawei)',
        quantity: 0,
        image: `https://picsum.photos/id/12/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 3,
        title: 'electronics13 (Huawei)',
        quantity: 2,
        image: `https://picsum.photos/id/13/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 4,
        title: 'electronics14 (Huawei)',
        quantity: 2,
        image: `https://picsum.photos/id/14/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 5,
        title: 'electronics15 (Samsung)',
        quantity: 2,
        image: `https://picsum.photos/id/15/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 6,
        title: 'electronics16 (Samsung)',
        quantity: 2,
        image: `https://picsum.photos/id/16/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 7,
        title: 'electronics17 (Samsung)',
        quantity: 2,
        image: `https://picsum.photos/id/17/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 8,
        title: 'electronics18 (Samsung)',
        quantity: 2,
        image: `https://picsum.photos/id/18/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 9,
        title: 'electronics19 (Samsung)',
        quantity: 2,
        image: `https://picsum.photos/id/19/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 10,
        title: 'electronics20 (Samsung)',
        quantity: 2,
        image: `https://picsum.photos/id/20/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 2,
        title: 'electronics21 (Samsung)',
        quantity: 2,
        image: `https://picsum.photos/id/21/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 2,
        title: 'electronics22 (Apple) (Metalic,8GB Ram,Supet power,Large Memory,)',
        quantity: 2,
        image: `https://picsum.photos/id/22/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 3,
        title: 'smartphones23 (Apple) (8GB Ram)',
        quantity: 2,
        image: `https://picsum.photos/id/23/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 4,
        title: 'smartphones24 (Apple) (,Supet power)',
        quantity: 2,
        image: `https://picsum.photos/id/24/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 5,
        title: 'smartphones25 (Apple)(Large Memory,)',
        quantity: 2,
        image: `https://picsum.photos/id/25/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 6,
        title: 'smartphones26 (Apple)(Large Memory,Supet power)',
        quantity: 2,
        image: `https://picsum.photos/id/26/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 7,
        title: 'smartphones27 (Apple)',
        quantity: 2,
        image: `https://picsum.photos/id/27/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 8,
        title: 'smartphones28 (Apple)',
        quantity: 2,
        image: `https://picsum.photos/id/28/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 9,
        title: 'smartphones29 (Apple)',
        quantity: 2,
        image: `https://picsum.photos/id/29/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 0,
        title: 'smartphones30 (Samsung)',
        quantity: 2,
        image: `https://picsum.photos/id/30/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 3,
        title: 'smartphones31 (Samsung)(8GB Ram,large Memory)',
        quantity: 2,
        image: `https://picsum.photos/id/31/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 2,
        title: 'smartphones32 (Samsung)(8GB Ram,Large Memory)',
        quantity: 2,
        image: `https://picsum.photos/id/32/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 3,
        title: 'tech-33 (Poco)',
        quantity: 2,
        image: `https://picsum.photos/id/33/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 4,
        title: 'tech-34 (Poco)',
        quantity: 2,
        image: `https://picsum.photos/id/34/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 5,
        title: 'tech-35 ()',
        quantity: 2,
        image: `https://picsum.photos/id/35/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
        categories: [
            {
                id: 4,
                name: 'Modern tech',
            }
        ],
    },
    {
        id: 36,
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 6,
        title: 'tech-36 (Poco)',
        quantity: 2,
        image: `https://picsum.photos/id/36/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 7,
        title: 'tech-37 (Poco)',
        quantity: 2,
        image: `https://picsum.photos/id/37/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 8,
        title: 'tech-38 (Poco)',
        quantity: 2,
        image: `https://picsum.photos/id/38/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 9,
        title: 'tech-39 (Samsung,Huawei)',
        quantity: 2,
        image: `https://picsum.photos/id/39/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 4,
        title: 'tech-40 (Samsung,Huawei)',
        quantity: 2,
        image: `https://picsum.photos/id/40/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 1,
        title: 'tech-41 (Samsung,Huawei)',
        quantity: 2,
        image: `https://picsum.photos/id/41/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 2,
        title: 'tech-42 (Samsung,Huawei)(8GB Ram,Large Memory)',
        quantity: 2,
        image: `https://picsum.photos/id/42/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 3,
        title: 'test1-43 (Samsung,Huawei,Apple)',
        quantity: 2,
        image: `https://picsum.photos/id/43/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 4,
        title: 'test1-44 (Samsung,Huawei) (8GB Ram,Large Memory)',
        quantity: 2,
        image: `https://picsum.photos/id/44/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 5,
        title: 'test1-45 (Samsung,Huawei)',
        quantity: 2,
        image: `https://picsum.photos/id/45/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 6,
        title: 'test2-46 (Samsung,Huawei)',
        quantity: 2,
        image: `https://picsum.photos/id/46/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 7,
        title: 'test2-47',
        quantity: 2,
        image: `https://picsum.photos/id/47/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
        categories: [
            {
                id: 6,
                name: 'test2',
            }
        ],
    },
    {
        id: 48,
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 8,
        title: 'test3-48',
        quantity: 2,
        image: `https://picsum.photos/id/48/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
        categories: [
            {
                id: 7,
                name: 'test3',
            }
        ],
    },
    {
        id: 49,
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 9,
        title: 'no category-49 (8GB Ram,Large Memory)',
        quantity: 2,
        image: `https://picsum.photos/id/49/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 5,
        title: 'no category-50 (8GB Ram,Large Memory)',
        quantity: 2,
        image: `https://picsum.photos/id/50/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 1,
        title: 'no category-51 (8GB Ram,Large Memory)',
        quantity: 2,
        image: `https://picsum.photos/id/51/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
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
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 2,
        title: 'no category-52 (test2)',
        quantity: 2,
        image: `https://picsum.photos/id/52/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
        features: [

            {
                id: 6,
                name: 'test2'
            }
        ],
    },
    {
        id: 53,
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 3,
        title: 'no category-53 (test3)',
        quantity: 2,
        image: `https://picsum.photos/id/53/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
        features: [

            {
                id: 7,
                name: 'test3'
            }
        ],
    },
    {
        id: 54,
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        rate: 4,
        title: 'no category-54',
        quantity: 2,
        image: `https://picsum.photos/id/54/${imageQuilty}`,
        price: 1500,
        oldPrice: 15000,
    },

];

// type ProductFilterFields = ProductType & { [k: string]: any }
// const filterFieldsProduct = (products: ProductFilterFields[], fields: string[]) => {
//     return products.map((product, index) => {
//         const newProduct: { [k: string]: any } = {};
//         fields.forEach((field) => {
//             newProduct[field] = product[field];
//         })
//         return newProduct as ProductType;
//     });

// }

/* const filterCategories = (products: Product[], categories: string[]) => {

    return products.filter((product, index) => {
        return categories.includes(product.categories[0].name)
    }
} */