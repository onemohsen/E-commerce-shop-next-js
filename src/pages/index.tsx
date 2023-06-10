import Subscribe from "@/components/commons/Subscribe";
import RecommendedProducts from "@/components/commons/products/RecommendedProducts";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import CategoriesSlide from "@/components/pages/index/deals-offers/CategoriesSlide";
import DealsOffers from "@/components/pages/index/deals-offers/DealsOffers";
import ExtraServices from "@/components/pages/index/extra-services/ExtraServices";
import { ProductCategories } from "@/components/pages/index/product-category/ProductCategories";
import RequestSupplier from "@/components/pages/index/request-supplier/RequestSupplier";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ContainerWrapper className="py-5 space-y-5">
        <CategoriesSlide />
        <DealsOffers className="w-full flex max-h-56" />
        <ProductCategories className="w-full flex h-56" />
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
