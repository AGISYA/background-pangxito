"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [selectedImage, setSelectedImage] = useState<string>("/images/1.jpg");
  const [dataHero, setDataHero] = useState({
    image:
      "https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg",
    description1: { title: "", description: "" },
    description2: { name_customer: "", feedback: "" },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange =
    (
      field: "description1" | "description2",
      subfield: "title" | "description" | "name_customer" | "feedback"
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataHero((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subfield]: e.target.value,
        },
      }));
    };

  const saveToLocalStorage = () => {
    localStorage.setItem("testimoni", JSON.stringify(dataHero));
  };

  return (
    <div className="bg-white p-4 space-y-4 w-full h-full flex">
      <div className="mx-4 mt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Image Dashboard
        </h2>
        <Image
          src={selectedImage}
          alt="Gambar"
          width={350}
          height={250}
          className="mb-4 rounded-md shadow-sm"
        />
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-1">
            Ubah Gambar:
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:bg-gray-200 hover:file:bg-gray-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Deskripsi 1
          </h2>
          <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200">
            <input
              type="text"
              value={dataHero.description1.title}
              onChange={handleChange("description1", "title")}
              className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-sm"
              placeholder="Masukkan judul baru"
            />
            <input
              type="text"
              value={dataHero.description1.description}
              onChange={handleChange("description1", "description")}
              className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-sm"
              placeholder="Masukkan deskripsi baru"
            />
            <button
              onClick={saveToLocalStorage}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors text-sm"
            >
              UPDATE
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Deskripsi 2
          </h2>
          <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200">
            <input
              type="text"
              value={dataHero.description2.name_customer}
              onChange={handleChange("description2", "name_customer")}
              className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-sm"
              placeholder="Nama Customer"
            />
            <input
              type="text"
              value={dataHero.description2.feedback}
              onChange={handleChange("description2", "feedback")}
              className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-sm"
              placeholder="Deskripsi"
            />
            <button
              onClick={saveToLocalStorage}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors text-sm"
            >
              UPDATE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
