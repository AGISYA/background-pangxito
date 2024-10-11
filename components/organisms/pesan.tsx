import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

const PesanSekarang = () => {
  return (
    <div className="bg-white py-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br bg-white"></div>
      <h1 className="text-2xl font-bold text-red-700 mb-6 relative z-10">
        Jajanan yang Bikin Nagih Ya PANGXITO
      </h1>
      <button className="bg-red-600 text-xs sm:text-sm text-white py-2 px-6 rounded-lg uppercase font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-red-500 relative z-10">
        Pesan Sekarang
      </button>
      <div className="mt-12 relative justify-center items-center z-10">
        <h3 className="text-lg sm:text-2xl font-bold text-red-700 mb-4">
          Hubungi Kami
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          <div className="flex items-center sm:mx-10">
            <FaMapMarkerAlt className="text-[5px] sm:text-sm text-red-600 mr-1" />
            <p className="text-[5px] sm:text-sm text-gray-600 font-semibold">
              Jl. Contoh Alamat No. 123, Kota
            </p>
          </div>
          <div className="flex items-center sm:mx-10">
            <FaClock className="text-[5px] sm:text-sm text-red-600 mr-1" />
            <p className="text-[5px] sm:text-sm text-gray-600 font-semibold">
              Senin - Jumat, 10:00 - 20:00
            </p>
          </div>
          <div className="flex items-center sm:mx-10">
            <FaPhone className="text-[5px] sm:text-sm text-red-600 mr-1" />
            <p className="text-[5px] sm:text-sm text-gray-600 font-semibold">
              (021) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesanSekarang;
