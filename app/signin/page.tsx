import Image from "next/image";
import React from "react";

export default function signin() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          src="/images/3.jpg"
          width="5000"
          height="5000"
          alt="Background Image"
        />
      </div>
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-yellow-500 text-white text-center py-6 rounded-none md:rounded-t-lg">
            <h2 className="text-3xl font-bold">PANGXITO</h2>
            <p className="text-sm">Login to your account</p>
          </div>
          <div className="p-8 bg-red-500 shadow-md rounded-b-lg">
            <label className="block text-sm text-white font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-yellow-400 w-full h-10 px-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            <label className="block mt-4 text-sm text-white font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-yellow-400 w-full h-10 px-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            <div className="flex justify-between items-center mt-4">
              <a href="#" className="text-sm text-white hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-yellow-500 text-white font-bold py-2 px-4 mt-6 rounded-md hover:bg-yellow-600 transition-colors duration-200">
              Login
            </button>
            <div className="text-center mt-6">
              <p className="text-sm text-white">
                Belum memiliki akun?{" "}
                <a href="signup" className="text-yellow-300 hover:underline">
                  Signup
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
