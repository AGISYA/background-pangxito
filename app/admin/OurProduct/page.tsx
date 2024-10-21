"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function OurProduct() {
  const [selectedImageProduct, setSelectedImageProduct] =
    useState<string>("/images/1.jpg");
  const [dataProduct, setDataProduct] = useState({
    image:
      "https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg",
    product1: { images1: "", nameproduct1: "" },
    product2: { images2: "", nameproduct2: "" },
  });

  const handleImageProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setSelectedImageProduct(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeProduct =
    (
      field: "product1" | "product2",
      subfield: "images1" | "nameproduct1" | "images2" | "nameproduct2"
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataProduct((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subfield]: e.target.value,
        },
      }));
    };

  const saveToLocalStorage = () => {
    localStorage.setItem("product", JSON.stringify(dataProduct));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product 1
          </h2>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/1.jpg"
              alt="Product 1"
              width={200}
              height={150}
              className="rounded-md shadow-sm"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ubah Gambar:
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
              onChange={handleImageProductChange}
            />
          </div>
          <input
            type="text"
            value={dataProduct.product1.nameproduct1}
            onChange={handleChangeProduct("product1", "nameproduct1")}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan Name Product baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            UPDATE
          </button>
        </section>

        <section className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product 2
          </h2>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/1.jpg"
              alt="Product 2"
              width={200}
              height={150}
              className="rounded-md shadow-sm"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ubah Gambar:
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
              onChange={handleImageProductChange}
            />
          </div>
          <input
            type="text"
            value={dataProduct.product2.nameproduct2}
            onChange={handleChangeProduct("product2", "nameproduct2")}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan Name Product baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            UPDATE
          </button>
        </section>
      </div>
    </div>
  );
}
