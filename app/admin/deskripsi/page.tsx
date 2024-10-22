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
      JSON.stringify(dataDeskripsiPangxito)
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Data Produk</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div className="flex items-center justify-center">
          <Image
            src={selectedImageDeskripsiPangxito}
            alt="Gambar Produk"
            width={180}
            height={180}
            className="rounded-md border border-gray-300"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Produk:
            </label>
            <input
              type="text"
              value={dataDeskripsiPangxito.DeskripsiPangxito2.maintitle}
              onChange={handleChangeDeskripsiPangxito(
                "DeskripsiPangxito2",
                "maintitle"
              )}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Judul baru"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ubah Gambar:
            </label>
            <input
              type="file"
              onChange={handleImageChangeDeskripsiPangxito}
              className="block w-full text-sm text-gray-600 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={saveToLocalStorage}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Update
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Product 1 */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Product 1
          </h3>
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito3.title1}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito3",
              "title1"
            )}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Judul baru"
          />
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito3.description1}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito3",
              "description1"
            )}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Deskripsi baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            UPDATE
          </button>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Product 2
          </h3>
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito4.title2}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito4",
              "title2"
            )}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Judul baru"
          />
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito4.description2}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito4",
              "description2"
            )}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Deskripsi baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            UPDATE
          </button>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Product 3
          </h3>
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito5.title3}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito5",
              "title3"
            )}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Judul baru"
          />
          <input
            type="text"
            value={dataDeskripsiPangxito.DeskripsiPangxito5.description3}
            onChange={handleChangeDeskripsiPangxito(
              "DeskripsiPangxito5",
              "description3"
            )}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Deskripsi baru"
          />
          <button
            onClick={saveToLocalStorage}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            UPDATE
          </button>
        </div>
      </div>

      {/* Additional Product Section */}
      <div>
        <input
          type="text"
          value={dataDeskripsiPangxito.DeskripsiPangxito6.description4}
          onChange={handleChangeDeskripsiPangxito(
            "DeskripsiPangxito6",
            "description4"
          )}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan Deskripsi tambahan"
        />
      </div>
    </div>
  );
}
