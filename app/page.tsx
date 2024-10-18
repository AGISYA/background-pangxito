"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import FeaturesSection from "@/components/organisms/features-section";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Pangxito3in1 from "@/components/organisms/pangxito3in1";
import PesanSekarang from "@/components/organisms/pesan";
import TestimonialSection from "@/components/organisms/testimonial";
import ProductSection from "@/components/organisms/producsection";

const Home = () => {
  // const [hero, setHero] = useState<any>();

  // useEffect(() => {
  //   const storedHero = localStorage.getItem("hero");
  //   if (storedHero) {
  //     const parsedHero = JSON.parse(storedHero);
  //     console.log(parsedHero);
  //     setHero(parsedHero);
  //   }
  // }, []);
  const [hero, setHero] = useState<any>();

  useEffect(() => {
    const checkExistData = localStorage.getItem("testimoni") || "";
    if (checkExistData !== "") {
      setHero(JSON.parse(checkExistData));
    }
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative flex items-center justify-center h-screen p-6">
        <Image
          alt="A delicious pangsit goreng dish with spices"
          src="/images/2.jpg"
          width="5000"
          height="5000"
          className="absolute top-0 left-0 w-full h-full object-cover bg-center z-10"
        />
        <div className="relative w-full h-full pt-20 md:pt-32">
          <div className="flex justify-start">
            <div className="relative bg-white p-4 rounded-lg text-center shadow-lg z-10 max-w-xs">
              <h1 className="font-playfair text-xl md:text-3xl text-red-600 mb-1 md:mb-3 font-extrabold">
                {hero?.description1.title || "Pangxito"}
              </h1>
              <div className="text-black mb-2 md:mb-4 text-xs md:text-base">
                {hero?.description1.description ||
                  "Pangsit Tulang Rangu 3 in 1 bisa digoreng, direbus, dan dikukus"}
              </div>
              <button className="bg-red-600 text-white py-1 px-3 md:py-2 md:px-6 rounded-full text-xs md:text-base shadow-md hover:bg-red-500 transition duration-300">
                PESAN SEKARANG
              </button>
            </div>
          </div>
        </div>

        <TestimonialSection />
      </div>
      <ProductSection />
      <FeaturesSection />
      <Pangxito3in1 />
      <PesanSekarang />
      <Footer />
    </div>
  );
};

export default Home;
