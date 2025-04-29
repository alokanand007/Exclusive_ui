import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md p-4 flex items-center justify-around">
        <div className="text-xl font-bold text-black-600">Exclusive</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-black-700 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-black-700 hover:text-blue-500">
            About Us
          </a>
          <a href="#contact" className="text-black-700 hover:text-blue-500">
            Contact
          </a>
          <a href="#home" className="text-black-700 hover:text-blue-500">
            Sign Up
          </a>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
