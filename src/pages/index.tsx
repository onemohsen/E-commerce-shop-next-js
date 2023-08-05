import Subscribe from "@/components/commons/Subscribe";
import RecommendedProducts from "@/components/pages/products/index/recommended-products/RecommendedProducts";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import CategoriesSlide from "@/components/pages/index/deals-offers/CategoriesSlide";
import DealsOffers from "@/components/pages/index/deals-offers/DealsOffers";
import ExtraServices from "@/components/pages/index/extra-services/ExtraServices";
import { ProductCategories } from "@/components/pages/index/product-category/ProductCategories";
import RequestSupplier from "@/components/pages/index/request-supplier/RequestSupplier";
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
