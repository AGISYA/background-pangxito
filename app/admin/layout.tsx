import React from "react";

export default function HeaderAdmin() {
  return (
    <div className="bg-red-500 flex items-center justify-end h-14 sticky top-0 z-50">
      <nav className="mr-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white ">
              Admin
            </a>
          </li>
          <li>
            <a href="#" className="text-white ">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
