"use client";

import { useState } from "react";

// import React, { useState } from "react";

export default function footer() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataFooter, setDataFooter] = useState({
    footer: { maintitle: "", deskription: "" },
  });

  const handleChangeFooter =
    (field: "footer", subfield: "maintitle" | "deskription") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataFooter((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subfield]: e.target.value,
        },
      }));
    };
  const saveToLocalStorage = () => {
    localStorage.setItem("footer", JSON.stringify(dataFooter));
    console.log(dataFooter);
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
          value={dataFooter.footer.maintitle}
          onChange={handleChangeFooter("footer", "maintitle")}
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
          value={dataFooter.footer.deskription}
          onChange={handleChangeFooter("footer", "deskription")}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan lokasi bisnis"
        />
      </div>
      <button
        onClick={saveToLocalStorage}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        UPDATE
      </button>
    </div>
  );
}
