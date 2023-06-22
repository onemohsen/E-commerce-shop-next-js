import { Feature } from './Feature';
import { Brand } from './Brand';
import { Category } from './Category';

export type Product = {
    id: number,
    title: string,
    image: string,
    price: number,
    oldPrice?: number,
    summary?: string,
    rate?: number,
    categories?: Category[],
    brands?: Brand[],
    features?: Feature[],
}