import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between text-white px-10 md:px-20 bg-[#171D32] h-20">
      <span className="text-xl font-bold tracking-wide flex items-center gap-2">
        <img
          src="public/475092458_1351448325849394_6770376157567356722_n.png"
          alt="Logo"
          className="w-6 h-6 rounded-full"
        />
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent animate-gradient">
          Portfolio
        </span>
      </span>

      {/* Menu cho desktop */}
      <ul className="hidden md:flex gap-6 items-center">
        <a href="#About">
          <li className="text-md font-semibold transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md font-semibold transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md font-semibold transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>

      {/* Icon menu cho mobile */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-1/2 transform -translate-y-1/2 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-1/2 transform -translate-y-1/2 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}

      {/* Menu cho mobile */}
      {menu && (
        <ul className="absolute top-full left-0 right-0 bg-[#171D32] text-white flex flex-col items-center gap-4 py-4 md:hidden">
          <a href="#About">
            <li className="text-md font-semibold transition-all duration-300 p-1">About</li>
          </a>
          <a href="#Projects">
            <li className="text-md font-semibold transition-all duration-300 p-1">Projects</li>
          </a>
          <a href="#Footer">
            <li className="text-md font-semibold transition-all duration-300 p-1">Contact</li>
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
