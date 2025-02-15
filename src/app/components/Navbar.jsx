"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { usePathname } from "next/navigation"; // Correct hook for App Router

const navLinks = [
  {
    title: 'Home',
    path: 'home'
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname(); // Corrected hook for active link highlighting

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 top-4 z-20 bg-[#121212]/80 py-1 px- rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        {/* Menu */}
        <div className="menu">
        <ul className="flex space-x- text-sm sm:space-x-8 sm:text-base p-2">
        {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`px-4 py-2 rounded-lg transition duration-300 ${pathname === link.path
                      ? "bg-white text-black font-semibold"
                      : "text-white hover:text-gray-300"
                    }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;