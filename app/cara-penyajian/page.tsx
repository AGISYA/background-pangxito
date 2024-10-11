import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import React from "react";

export default function Carapenyajian() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              src="/images/PangxitoGoreng.jpeg"
              alt="Pangxito"
              width={500}
              height={500}
              className="w-full "
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-red-600 mt-12 md:mt-0">
              Cara Membuat Pangxito Goreng
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-black">
              Ikuti langkah-langkah berikut untuk membuat Pangxito goreng yang
              lezat:
            </p>
            {[
              "Panaskan minyak goreng dalam wajan dengan api sedang.",
              "Masukkan Pangxito ke dalam minyak panas secara perlahan.",
              "Goreng Pangxito hingga berwarna kecoklatan dan renyah, sekitar 3-5 menit.",
              "Angkat dan tiriskan Pangxito dari minyak.",
              "Sajikan Pangxito dengan chili oil dan jeruk limau sesuai selera.",
              "Pangxito goreng siap dinikmati selagi hangat!",
            ].map((step, index) => (
              <p
                key={index}
                className="mt-2 text-base sm:text-lg md:text-xl text-black"
              >
                {index + 1}. {step}
              </p>
            ))}
          </div>
        </div>

        {/* Centered and styled product images section */}
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-2xl font-bold text-red-600 mb-5">
            Penyajian Lainnya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pangxito Goreng",
                image: "/images/PangxitoGoreng.jpeg",
              },
              {
                name: "Pangxito Rebus",
                image: "/images/PangxitoRebus.jpeg",
              },
              {
                name: "Pangxito Kuah",
                image: "/images/PangxitoKuah.jpeg",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center text-red-600 p-4 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="mt-2 font-bold text-sm sm:text-base">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
