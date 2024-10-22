"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [dataContactUs, setDataContactUs] = useState({
    image:
      "https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg",
    contactus1: { maintitle: "" },
    contactus2: { location: "", openinghours: "", contact: "" },
  });

  const handleChangeDeskripsiPangxito =
    (
      field: "contactus1" | "contactus2",
      subfield: "maintitle" | "location" | "openinghours" | "contact"
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataContactUs((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subfield]: e.target.value,
        },
      }));
    };

  const saveToLocalStorage = () => {
    localStorage.setItem("ContactUs", JSON.stringify(dataContactUs));
  };
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Update Informasi Bisnis
      </h2>
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Main Title:
        </label>
        <input
          type="text"
          value={dataContactUs.contactus1.maintitle}
          onChange={handleChangeDeskripsiPangxito("contactus1", "maintitle")}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan Main Title baru"
        />
      </div>

      {/* Location Section */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Location:
        </label>
        <input
          type="text"
          value={dataContactUs.contactus2.location}
          onChange={handleChangeDeskripsiPangxito("contactus2", "location")}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan lokasi bisnis"
        />
      </div>

      {/* Opening Hours Section */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Opening Hours:
        </label>
        <input
          type="text"
          value={dataContactUs.contactus2.openinghours}
          onChange={handleChangeDeskripsiPangxito("contactus2", "openinghours")}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan jam buka"
        />
      </div>

      {/* Contact Section */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Contact:
        </label>
        <input
          type="text"
          value={dataContactUs.contactus2.contact}
          onChange={handleChangeDeskripsiPangxito("contactus2", "contact")}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan kontak bisnis"
        />
      </div>

      {/* Button to Save Data */}
      <button
        onClick={saveToLocalStorage}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        UPDATE
      </button>
    </div>
  );
};

export default ContactUs;
