import { Feature } from './Feature';
import { Brand } from './Brand';
import { Category } from './Category';
import { Model } from './Model';

export type ProductType = {
    id: number,
    title: string,
    image: string,
    price: number,
    quantity: number,
    oldPrice?: number,
    summary?: string,
    rate?: number,
    categories?: Category[],
    brands?: Brand[],
    features?: Feature[],
}


export class Product extends Model {

    id: ProductType["id"] = 0;
    title: ProductType["title"] = "";
    image: ProductType["image"] = "";
    price: ProductType["price"] = 0;
    quantity: ProductType["quantity"] = 0;
    oldPrice?: ProductType["oldPrice"];
    summary?: ProductType["summary"];
    rate?: ProductType["rate"];
    categories?: ProductType["categories"]
    brands?: ProductType["brands"]
    features?: ProductType["features"]


    resource() {
        return 'products';
    }

}