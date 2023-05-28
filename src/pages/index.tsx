import Subscribe from "@/components/commons/Subscribe";
import RecommendedProducts from "@/components/commons/products/RecommendedProducts";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import ExtraServices from "@/components/pages/index/extra-services/ExtraServices";
import { ProductCategories } from "@/components/pages/index/product-category/ProductCategories";
import RequestSupplier from "@/components/pages/index/request-supplier/RequestSupplier";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ContainerWrapper className="py-20">
        <div className="space-y-5">
          <div>Home page</div>
          <ProductCategories />
          <RequestSupplier />
          <RecommendedProducts />
          <ExtraServices />
        </div>
      </ContainerWrapper>
      <div className="bg-gray-200 py-10">
        <Subscribe />
      </div>
    </div>
  );
}
