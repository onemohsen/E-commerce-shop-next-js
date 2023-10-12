import { ProductType } from "@/models/Product";
import Link from "next/link";

type Props = {
  products: ProductType[];
  itemClickHandler: (id: number) => void;
};

export default function ReseultSearch({ products, itemClickHandler }: Props) {
  return (
    <>
      <div className="flex max-h-72 w-[263px] transform flex-col justify-between  overflow-y-auto rounded border bg-white pl-2 pr-4 pt-2 shadow-lg">
        <div className="mb-3 space-y-2 overflow-y-auto overflow-x-hidden">
          {products.map((product) => (
            <Link
              key={product.id}
              href={{
                pathname: `/products/${product.id}`,
              }}
              title={product.title}
              className="inline-table truncate hover:bg-sky-100"
              onClick={() => itemClickHandler(product.id)}
            >
              <span className="p-1">{product.title}</span>
            </Link>
          ))}
        </div>
        <p className="py-3  text-center text-xs text-gray-400">
          {products.length > 0 && (
            <span> {products.length} products found</span>
          )}
          {products.length == 0 && <span>not found</span>}
        </p>
      </div>
    </>
  );
}
