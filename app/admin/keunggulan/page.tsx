"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Keunggulan() {
  const [selectedImageAdventages, setSelectedImageAdventages] =
    useState<string>("/images/1.jpg");
  const [dataAdventages, setDataAdventages] = useState({
    image:
      "https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg",
    adventages1: { images1: "", judul1: "", deskription1: "" },
    adventages2: { images2: "", judul2: "", deskription2: "" },
    adventages3: { images3: "", judul3: "", deskription3: "" },
  });

  const handleImageChangeAdventages = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setSelectedImageAdventages(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeAdventages =
    (
      field: "adventages1" | "adventages2" | "adventages3",
      subfield:
        | "images1"
        | "judul1"
        | "deskription1"
        | "images2"
        | "judul2"
        | "deskription2"
        | "images3"
        | "judul3"
        | "deskription3"
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataAdventages((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subfield]: e.target.value,
        },
      }));
    };

  const saveToLocalStorage = () => {
    localStorage.setItem("adventages", JSON.stringify(dataAdventages));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Keunggulan 1
          </h2>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/1.jpg"
              alt="Keunggulan 1"
              width={40}
              height={30}
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
            />
          </div>
          <input
            type="text"
            value={dataAdventages.adventages1.judul1}
            onChange={handleChangeAdventages("adventages1", "judul1")}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan Keunggulan baru"
          />
          <input
            type="text"
            value={dataAdventages.adventages1.deskription1}
            onChange={handleChangeAdventages("adventages1", "deskription1")}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan Deskripsi Keunggulan baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            UPDATE
          </button>
        </section>

        <section className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Keunggulan 2
          </h2>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/1.jpg"
              alt="Keunggulan 2"
              width={40}
              height={30}
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
            />
          </div>
          <input
            type="text"
            value={dataAdventages.adventages2.judul2}
            onChange={handleChangeAdventages("adventages2", "judul2")}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan Keunggulan baru"
          />
          <input
            type="text"
            value={dataAdventages.adventages2.deskription2}
            onChange={handleChangeAdventages("adventages2", "deskription2")}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan Deskripsi Keunggulan baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            UPDATE
          </button>
        </section>

        <section className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Keunggulan 3
          </h2>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/1.jpg"
              alt="Keunggulan 3"
              width={40}
              height={30}
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
            />
          </div>
          <input
            type="text"
            value={dataAdventages.adventages3.judul3}
            onChange={handleChangeAdventages("adventages3", "judul3")}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan Keunggulan baru"
          />
          <input
            type="text"
            value={dataAdventages.adventages3.deskription3}
            onChange={handleChangeAdventages("adventages3", "deskription3")}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan Deskripsi Keunggulan baru"
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
