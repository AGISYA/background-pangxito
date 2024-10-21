import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Gambar Product
      </h2>
      <div className="flex justify-center mb-6">
        <Image
          src="/images/1.jpg"
          alt="Gambar"
          width={250}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ubah Gambar:
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <input
        type="text"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Masukkan Name Product baru"
      />

      <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg shadow-md">
        {Array.from({ length: 3 }, (_, index) => (
          <section
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Product {index + 1}
            </h2>
            <input
              type="text"
              className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan Judul baru"
            />
            <input
              type="text"
              className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan Deskripsi baru"
            />
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200">
              UPDATE
            </button>
          </section>
        ))}
      </div>
    </div>
  );
}
