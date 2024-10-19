import Image from "next/image";
import React from "react";

export default function Keunggulan() {
  return (
    <div className="bg-white w-full h-full">
      <div className="bg-white flex p-4">
        <section>
          <h2 className="text-2xl font-semibold mt-10">Keunggulan 1</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Image
              src="/images/1.jpg"
              alt="Gambar"
              width={40}
              height={30}
              className="mb-6"
            />
            <div className="mb-4">
              <label className="block mb-2">Ubah Gambar:</label>
              <input type="file" />
            </div>

            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan Keunggulan baru"
            />
            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan Deskripsi Keunggulan baru"
            />

            <button className="w-full bg-green-500 text-white py-2 rounded-lg">
              UPDATE
            </button>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mt-10 mx-10">Keunggulan 2</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mx-10">
            <Image
              src="/images/1.jpg"
              alt="Gambar"
              width={40}
              height={30}
              className="mb-6"
            />
            <div className="mb-4">
              <label className="block mb-2">Ubah Gambar:</label>
              <input type="file" />
            </div>

            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan Keunggulan baru"
            />
            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan Deskripsi Keunggulan baru"
            />

            <button className="w-full bg-green-500 text-white py-2 rounded-lg">
              UPDATE
            </button>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mt-10 ">Keunggulan 3</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 ">
            <Image
              src="/images/1.jpg"
              alt="Gambar"
              width={40}
              height={30}
              className="mb-6"
            />
            <div className="mb-4">
              <label className="block mb-2">Ubah Gambar:</label>
              <input type="file" />
            </div>

            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan Keunggulan baru"
            />
            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Masukkan Deskripsi Keunggulan baru"
            />

            <button className="w-full bg-green-500 text-white py-2 rounded-lg">
              UPDATE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
