"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { usePathname } from "next/navigation"; // Correct hook for App Router
import { motion } from "framer-motion";

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
    <nav className="fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-90 py-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4 sm:space-x-8 text-sm sm:text-base p-2 relative">
          {navLinks.map((link) => {
            const isActive = pathname === `/${link.path}`;

            return (
              <li key={link.path} className="relative p-1">
                <Link
                  href={link.path}
                  className="px-4 py-2 rounded-lg relative text-white"
                >
                  {link.title}
                </Link>

                {/* Animated background rectangle */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary-950 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;