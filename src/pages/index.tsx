import Subscribe from "@/components/commons/Subscribe";
import RecommendedProducts from "@/components/commons/products/RecommendedProducts";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import ExtraServices from "@/components/pages/index/extra-services/ExtraServices";
import RequestSupplier from "@/components/pages/index/request-supplier/RequestSupplier";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ContainerWrapper className="py-20">
        <div className="space-y-10">
          <div>Home page</div>
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
