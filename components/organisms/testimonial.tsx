"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialSection = () => {
  const [testimoni, setTestimoni] = useState<any>();

  useEffect(() => {
    const checkExistData = localStorage.getItem("testimoni") || "";
    if (checkExistData !== "") {
      setTestimoni(JSON.parse(checkExistData));
    }
  }, []);

  return (
    <div className="absolute bottom-5 right-5 bg-yellow-200 p-6 rounded-xl w-72 shadow-lg z-10 transition-transform transform hover:scale-105">
      <div className="flex items-start mb-4">
        <Image
          width={100}
          height={100}
          alt="Customer photo"
          src="/images/1.jpg"
          className="rounded-full border-2 border-yellow-300 shadow-md w-14 h-14 mr-3"
        />
        <div>
          <h4 className="text-black font-bold text-lg mb-1">
            {testimoni ? testimoni.description2.name_customer : "Pangxito"}
          </h4>
          <p className="text-gray-800 text-sm italic">
            {testimoni
              ? testimoni.description2.feedback
              : `Pangsit yang lezat, benar-benar membuat saya terkesan!`}
          </p>
        </div>
      </div>
      <div className="text-yellow-500 flex justify-center mb-3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <div className="border-t border-yellow-300 pt-2">
        <p className="text-gray-600 text-xs text-center">
          - Customer Feedback -
        </p>
      </div>
    </div>
  );
};

export default TestimonialSection;
