import Subscribe from "@/components/Subscribe";
import RecommendedProducts from "@/features/products/index/recommended-products/RecommendedProducts";
import ContainerWrapper from "@/components/wrapper/ContainerWrapper";
import CategoriesSlide from "@/features/index/deals-offers/CategoriesSlide";
import DealsOffers from "@/features/index/deals-offers/DealsOffers";
import ExtraServices from "@/features/index/extra-services/ExtraServices";
import { ProductCategories } from "@/features/index/product-category/ProductCategories";
import RequestSupplier from "@/features/index/request-supplier/RequestSupplier";
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
