"use client";
import Image from "next/image";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "#about" },
  { name: "Features", link: "#contact" },
  { name: "Purchase", link: "#pricing" },
  { name: "Contact Us", link: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="top-[11px] xl:gap-[174px] w-full flex items-center max-sm:justify-between bg-transparent">
      <Image
        src="/green-earth-logo.png"
        alt="Logo"
        width={286}
        height={286}
        className="xl:pl-[120px] pt-1 max-sm:mt-3 max-sm:pl-2 max-sm:w-[90px]"
      />

      {/* Desktop Navigation */}
      <nav className="max-sm:hidden">
        <ul className="flex justify-center items-center gap-[53px] bg-light-green px-4 py-3 rounded-md">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.link}
                className="font-geist font-semibold text-white hover:bg-white hover:rounded-md hover:px-4 hover:py-3 hover:text-green transition-all ease-in-out duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="sm:hidden pr-4 z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 right-0 w-4/5 h-full bg-green z-40 shadow-lg transform transition-transform duration-300 ease-in-out sm:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-start p-8 space-y-6 mt-20">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full">
              <a
                href={link.link}
                className="font-geist font-semibold text-white text-lg hover:bg-light-green hover:rounded-md hover:px-4 hover:py-3 hover:text-white transition-all ease-in-out duration-300 block w-full"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
