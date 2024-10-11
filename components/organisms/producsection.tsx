import Image from "next/image";
import Link from "next/link";

const ProductSection = () => {
  const products = [
    {
      title: (
        <>
          Pangxito Tulang <br /> Rangu Original
        </>
      ),
      imgSrc: "/images/pangxito05.png",
      detailLink: "/produk/Pangxito-Tulang-Rangu-Original",
    },
    {
      title: (
        <>
          Pangxito Tulang <br /> Rangu With Cheese
        </>
      ),
      imgSrc: "/images/pangxito06.png",
      detailLink: "/produk/Pangxito-Tulang-Rangu-With-Cheese",
    },
  ];

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
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              alt="Product Image"
              src={product.imgSrc}
              width={300}
              height={300}
              className="object-cover mb-6"
            />
            <h3 className="text-xs md:text-lg font-semibold text-red-600 mb-2 text-center">
              {product.title}
            </h3>
            <Link
              href={product.detailLink}
              className="text-xs md:text-sm text-blue-600 hover:underline"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
