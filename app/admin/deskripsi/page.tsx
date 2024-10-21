"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function DeskripsiPangxito() {
  const [selectedImageDeskripsiPangxito, setSelectedImageDeskripsiPangxito] =
    useState<string>("/images/1.jpg");
  const [dataDeskripsiPangxito, setDataDeskripsiPangxito] = useState({
    image:
      "https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg",
    DeskripsiPangxito1: { images1: "" },
    DeskripsiPangxito2: { maintitle: "" },
    DeskripsiPangxito3: { title1: "", description1: "" },
    DeskripsiPangxito4: { title2: "", description2: "" },
    DeskripsiPangxito5: { title3: "", description3: "" },
    DeskripsiPangxito6: { description4: "" },
  });

  const handleImageChangeDeskripsiPangxito = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setSelectedImageDeskripsiPangxito(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeDeskripsiPangxito =
    (
      field:
        | "DeskripsiPangxito1"
        | "DeskripsiPangxito2"
        | "DeskripsiPangxito3"
        | "DeskripsiPangxito4"
        | "DeskripsiPangxito5"
        | "DeskripsiPangxito6",
      subfield:
        | "images1"
        | "maintitle"
        | "title1"
        | "description1"
        | "title2"
        | "description2"
        | "title3"
        | "description3"
        | "description4"
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataDeskripsiPangxito((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subfield]: e.target.value,
        },
      }));
    };

  const saveToLocalStorage = () => {
    localStorage.setItem(
      "DeskripsiPangxito",
      JSON.stringify(DeskripsiPangxito)
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Gambar Product
      </h2>
      <div className="flex justify-center mb-6">
        <Image
          src={selectedImageDeskripsiPangxito}
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
          onChange={handleImageChangeDeskripsiPangxito}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <input
          type="text"
          value={dataDeskripsiPangxito.DeskripsiPangxito2.maintitle}
          onChange={handleChangeDeskripsiPangxito(
            "DeskripsiPangxito2",
            "maintitle"
          )}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Masukkan Name Product baru"
        />
        <button
          onClick={saveToLocalStorage}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors text-sm"
        >
          UPDATE
        </button>
      </div>

      <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg shadow-md">
        {/* Product 1 */}
        <section className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Product 1
          </h2>
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito3.title1}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito3",
              "title1"
            )}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Masukkan Judul baru"
          />
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito3.description1}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito3",
              "description1"
            )}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Masukkan Deskripsi baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            UPDATE
          </button>
        </section>

        {/* Product 2 */}
        <section className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Product 2
          </h2>
          <input
            value={dataDeskripsiPangxito.DeskripsiPangxito4.title2}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito4",
              "title2"
            )}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Masukkan Judul baru"
          />
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito4.description2}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito4",
              "description2"
            )}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Masukkan Deskripsi baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            UPDATE
          </button>
        </section>

        {/* Product 3 */}
        <section className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Product 3
          </h2>
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito5.title3}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito5",
              "title3"
            )}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Masukkan Judul baru"
          />
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito5.description3}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito5",
              "description3"
            )}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Masukkan Deskripsi baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            UPDATE
          </button>
        </section>
      </div>
      <div>
        <input
          type="text"
          value={dataDeskripsiPangxito.DeskripsiPangxito6.description4}
          onChange={handleChangeDeskripsiPangxito(
            "DeskripsiPangxito6",
            "description4"
          )}
          className="w-full mt-6 p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Masukkan Name Product baru"
        />
        <button
          onClick={saveToLocalStorage}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors text-sm"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
}
