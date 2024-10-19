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
    <div className="bg-white flex flex-col p-4">
      <Image
        src={selectedImage}
        alt="Gambar"
        width={400}
        height={300}
        className="mb-6"
      />
      <div className="mb-4">
        <label className="block mb-2">Ubah Gambar:</label>
        <input type="file" onChange={handleImageChange} />
      </div>
      <div className="flex">
        <section>
          <h2 className="text-2xl font-semibold mt-10 mx-10">Deskripsi 1</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mx-10">
            <input
              type="text"
              value={dataHero.description1.title}
              onChange={handleChange("description1", "title")}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan judul baru"
            />
            <input
              type="text"
              value={dataHero.description1.description}
              onChange={handleChange("description1", "description")}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan deskripsi baru"
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
          <h2 className="text-2xl font-semibold mt-10">Deskripsi 2</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <input
              type="text"
              value={dataHero.description2.name_customer}
              onChange={handleChange("description2", "name_customer")}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Nama Customer"
            />
            <input
              type="text"
              value={dataHero.description2.feedback}
              onChange={handleChange("description2", "feedback")}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Deskripsi"
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
