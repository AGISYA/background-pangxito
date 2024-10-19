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
    <div className="bg-white w-full h-full">
      <div className="bg-white flex  p-4">
        <section>
          <h2 className="text-2xl font-semibold mt-10 mx-10">Product 1</h2>
          <div className="bg-white justify-center p-6 rounded-lg shadow-md border border-gray-200 mx-10">
            <Image
              src="/images/1.jpg"
              alt="Gambar"
              width={200}
              height={150}
              className="mb-6"
            />
            <div className="mb-4">
              <label className="block mb-2">Ubah Gambar:</label>
              <input type="file" onChange={handleImageProductChange} />
            </div>

            <input
              type="text"
              value={dataProduct.product1.nameproduct1}
              onChange={handleChangeProduct("product1", "nameproduct1")}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan Name Product baru"
            />

            <button
              onClick={saveToLocalStorage}
              className="w-full bg-green-500 text-white py-2 rounded-lg"
            >
              UPDATE
            </button>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mt-10">Product 2</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Image
              src="/images/1.jpg"
              alt="Gambar"
              width={200}
              height={150}
              className="mb-6"
            />
            <div className="mb-4">
              <label className="block mb-2">Ubah Gambar:</label>
              <input type="file" onChange={handleImageProductChange} />
            </div>

            <input
              type="text"
              value={dataProduct.product2.nameproduct2}
              onChange={handleChangeProduct("product2", "nameproduct2")}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan Name Product baru"
            />

            <button
              onClick={saveToLocalStorage}
              className="w-full bg-green-500 text-white py-2 rounded-lg"
            >
              UPDATE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
