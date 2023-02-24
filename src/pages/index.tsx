import Subscribe from "@/components/commons/Subscribe";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ContainerWrapper className="py-20">Home Page</ContainerWrapper>
      <div className="bg-gray-200 py-10">
        <Subscribe />
      </div>
    </div>
  );
}
