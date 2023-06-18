import { Feature } from './Feature';
import { Brand } from './Brand';
import { Category } from './Category';

export type Product = {
    id: number,
    title: string,
    image: string,
    price: number,
    summary?: string,
    categories?: Category[],
    brands?: Brand[],
    features?: Feature[],
}