import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductSection = () => {
  const [dataProduct, setDataProduct] = useState<any>();

  useEffect(() => {
    const checkExistData = localStorage.getItem("product") || "";
    if (checkExistData !== "") {
      setDataProduct(JSON.parse(checkExistData));

      console.log(JSON.parse(checkExistData));
    }
  }, []);

  return (
    <div className="bg-white py-14">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-6"> Our Products </h1>
        <Link href="/produk">
          <button className="bg-red-600 text-white py-3 px-6 hover:bg-red-500">
            View All Products
          </button>
        </Link>
      </div>
      <div className="container flex justify-center md:grid-cols-2 gap-10 mx-auto px-6">
        <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
          <Image
            alt="Product Image"
            src="/images/1.jpg"
            width={300}
            height={300}
            className="object-cover mb-6"
          />
          <h3 className="text-xs md:text-lg font-semibold text-red-600 mb-2 text-center">
            {dataProduct ? dataProduct.product1.nameproduct1 : "Pangxito"}
          </h3>
          <Link
            href="#"
            className="text-xs md:text-sm text-blue-600 hover:underline"
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
          <Image
            alt="Product Image"
            src="/images/1.jpg"
            width={300}
            height={300}
            className="object-cover mb-6"
          />
          <h3 className="text-xs md:text-lg font-semibold text-red-600 mb-2 text-center">
            {dataProduct ? dataProduct.product2.nameproduct2 : "PANGXITO"}
          </h3>
          <Link
            href="#"
            className="text-xs md:text-sm text-blue-600 hover:underline"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
