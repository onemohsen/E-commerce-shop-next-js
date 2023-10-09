import Subscribe from "@/components/Subscribe";
import ContainerWrapper from "@/components/wrapper/ContainerWrapper";
import {
  CategoriesSlide,
  DealsOffers,
  ExtraServices,
  RequestSupplier,
  ProductCategories,
} from "@/features/home";
import { RecommendedProducts } from "@/features/products";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ContainerWrapper className="space-y-5 py-5">
        <CategoriesSlide />
        <DealsOffers className="flex max-h-56 w-full" />
        <ProductCategories className="flex h-56 w-full" />
        <RequestSupplier />
        <RecommendedProducts />
        <ExtraServices />
      </ContainerWrapper>
      <div className="bg-gray-200 py-10">
        <Subscribe />
      </div>
    </>
  );
}
