import Breadcrumbs from "@/components/commons/Breadcrumbs";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import ProductDetail from "@/components/pages/products/single/ProductDetail";
import ProductMain from "@/components/pages/products/single/ProductMain";
import ProductRelated from "@/components/pages/products/single/ProductRelated";
import ProductYouMayLike from "@/components/pages/products/single/ProductYouMayLike";
import { Product, ProductType } from "@/models/Product";
import { BreadcrumbsType } from "@/models/Types";
import { SingleProductContext } from "@/state/products/SingleProductContext";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

export default function Index({
  product,
  youMayLikeProducts,
  relatedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const breadcrumbs: BreadcrumbsType[] = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: product.title },
  ];

  return (
    <ContainerWrapper className="space-y-5 py-5">
      <Breadcrumbs items={breadcrumbs} />
      <SingleProductContext.Provider value={{ product }}>
        <ProductMain />
        <div className="grid grid-cols-12 gap-3 ">
          <ProductDetail className="col-span-9" />
          <ProductYouMayLike
            items={youMayLikeProducts}
            className="col-span-3"
          />
        </div>
        <ProductRelated products={relatedProducts} />
      </SingleProductContext.Provider>
    </ContainerWrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  /* disable for fast build */
  // const response = await new Product().setQuery("?paginate=false").get();
  // const { data }: { data: Product[] } = await response.json();
  // const paths = data.map((p) => ({ params: { id: `${p.id}` } }));

  return {
    // paths: paths,
    paths: [],
    fallback: "blocking", // false or "blocking"
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps<
  {
    product: ProductType;
    youMayLikeProducts: ProductType[];
    relatedProducts: ProductType[];
  },
  Params
> = async (context) => {
  const params = context.params!;
  const product = await new Product().find(+params.id);

  const randomIds = new Set<number>();
  while (randomIds.size < 5) {
    randomIds.add(Math.floor(Math.random() * (54 - 1 + 1)) + 1);
  }
  const youMayLikeProducts = await new Product()
    .whereIn("id", [...randomIds])
    .paginate(false)
    .$get();

  const relatedProducts = await new Product()
    .whereRelation("categories", product?.categories?.map((c) => c.id) ?? [])
    .limit(6)
    .paginate(false)
    .$get();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: product,
      youMayLikeProducts: youMayLikeProducts.data,
      relatedProducts: relatedProducts.data,
    },
    revalidate: 10,
  };
};
