import Image from "next/image";
import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-white flex-1 flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Images</h1>
        <Image
          src="/images/1.jpg"
          alt="Gambar"
          width={400}
          height={300}
          className="mb-4"
        />
        <div className="mb-4">
          <label className="block mb-2">Ubah Gambar:</label>
          <input type="file" className="" />
          Pilih Gambar
          <input type="file" id="fileInput" className="hidden" />
        </div>
        <div>
          <label className="block mb-2">Ubah Deskripsi:</label>
          <input
            type="text"
            className="border rounded p-2 w-full"
            placeholder="Masukkan deskripsi baru"
          />
        </div>
      </div>
    </div>
  );
}
