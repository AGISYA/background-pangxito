import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SidebarAdmin() {
  return (
    <div className="w-60 bg-white h-full text-black shadow-lg">
      <div className="p-4 flex items-center border-b border-gray-300">
        <Image
          src="/images/LogoPangxito.png"
          alt="Logo"
          width={100}
          height={100}
          className="mr-2 "
        />
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Website
            </a>
          </li>
          <li>
            <Link
              href="/admin/hero"
              className="block py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Hero
            </Link>
          </li>
          <li>
            <Link
              href="/admin/OurProduct"
              className="block py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Our Product
            </Link>
          </li>
          <li>
            <a
              href="/admin/keunggulan"
              className="block py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Keunggulan
            </a>
          </li>
          <li>
            <a
              href="/admin/deskripsi"
              className="block py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Deskripsi
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Setting
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
