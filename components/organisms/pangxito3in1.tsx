// components/organisms/PangsitFavorit.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pangxito3in1: React.FC = () => {
  return (
    <div className="container mx-auto py-10 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="relative mb-6 md:w-1/2 w-full flex justify-center">
          <Image
            width={500}
            height={500}
            alt="PANGXITO 3 IN 1"
            className="rounded-lg shadow-lg w-[70%] md:w-[500px] h-auto transform transition-transform duration-300 hover:scale-105"
            src="/images/1.jpg"
          />
        </div>
        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-3xl font-bold text-red-600 mb-8 text-center md:text-left">
            Pangxito 3in1
          </h1>

          <div className="space-y-6">
            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-xl md:text-xl font-semibold text-red-600 mb-1">
                  PANGXITO GORENG
                </h5>
                <p className="text-xs md:text-lg text-black leading-relaxed">
                  Bisa diolah menjadi pangxito goreng dan ditambah dengan saus
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-xl md:text-xl font-semibold text-red-600 mb-1">
                  PANGXITO REBUS
                </h5>
                <p className="text-xs md:text-lg text-black leading-relaxed">
                  Cocok juga dijadikan pangsit rebus yang lembut dan kenyal
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-xl md:text-xl font-semibold text-red-600 mb-1">
                  PANGXITO KUAH
                </h5>
                <p className="text-xs md:text-lg text-black leading-relaxed">
                  Bisa juga dijadikan pangsit kuah dengan bumbu pedas manis
                  gurih yang bikin ketagihan
                </p>
              </div>
            </div>

            <div className="flex items-start mx-9">
              <div>
                <p className="text-xs md:text-lg text-black leading-relaxed">
                  Mau tahu cara masak Pangxito?
                  <Link
                    href="/cara-penyajian"
                    className="text-xs md:text-sm text-blue-600 hover:underline cursor-pointer"
                  >
                    Cara Penyajian
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pangxito3in1;