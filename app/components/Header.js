"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [showImage, setShowImage] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Function to toggle dropdown visibility
    setShowImage(!showImage);
    // Additional logic related to your dropdown functionality
  };
  const closeDropdown = () => {
    setIsOpen(false); // Function to close dropdown
  };
  return (
    <div className="flex justify-between items-center bg-customHeader shadow-lg">
      <div className=" xs:px-1 xs:w-[250px] px-10   ">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={270}
          height={60}
          className=""
        />
      </div>
      <div className=" sm:space-x-10   relative right-1 xs:ml-3">
        {/* Mobile Dropdown */}
        <div className="lg:hidden ">
          <button
            onClick={toggleDropdown}
            className="text-black rounded-lg p-6 flex items-center"
          >
            All Pdf Tools
            {showImage && ( // Render the Image component conditionally based on showImage state
              <Image
                src="/img/down 1.png"
                alt="down"
                width={14}
                height={14}
                className=""
              />
            )}
          </button>
          {/* Dropdown Content */}
          {isOpen && (
            <div className="absolute z-10 right-0 mt-2 bg-white shadow-md rounded-lg py-2 w-48">
              {/* Dropdown Links */}
              <Link
                href="/"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black"
              >
                Home
              </Link>
              <Link
                href="/split-pdf"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black"
              >
                Split Pdf
              </Link>
              <Link
                href="/merge-pdf"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black"
              >
                Merge Pdf
              </Link>
              <Link
                href="/compress-pdf"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black"
              >
                Compress Pdf
              </Link>
              <Link
                href="/remove-pages"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black"
              >
                Remove Pages
              </Link>
              <div className="justify-between space-x-4 ml-5">
                <button
                  onClick={closeDropdown}
                  className="bg-transparent hover:shodow-lg text-black hover:text-black md:py-2 md:px-4 hover:border-transparent rounded md:text-base text-sm"
                >
                  Login
                </button>
                <button
                  onClick={closeDropdown}
                  className="bg-red-500 hover:bg-red-300 text-white md:font-bold font-semibold md:py-2 md:px-4 p-2 text-xs md:text-base rounded-xl md:-mr-0 "
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="xs:hidden sm:hidden lg:flex lg:space-x-10 lg:mr-20 ">
        <Link href="/" className="text-black      ">
          <span>Home</span>
        </Link>
        <Link href="/split-pdf" className="text-black     ">
          <span className=""> Split Pdf </span>
        </Link>
        <Link prefetch={false} href="/merge-pdf" className="text-black     ">
          <span>Merge Pdf</span>
        </Link>
        <Link href="/compress-pdf" className="text-black      ">
          <span>Compress Pdf</span>
        </Link>
        <Link href="/remove-pages" className="text-black    ">
          <span> Remove Pages</span>
        </Link>
        <Link href="/testing" className="text-black    ">
          <span>Any Thing To PDF</span>
        </Link>
      </div>
      <div className="sm:hidden  h-16 md:hidden lg:flex xs:hidden items-center mt-1 md:mt-0 md:mr-6 md:ml-0 ml-10">
        <div className="flex ml-4 md:ml-0 md:mr-2 mr-24 ">
          <button class="bg-transparent hover:shodow-lg text-black hover:text-black md:py-2 md:px-4 hover:border-transparent rounded md:text-base text-sm">
            Login
          </button>
        </div>
        <div className="flex">
          <button class="bg-red-500 hover:bg-red-300 text-white md:font-bold font-semibold md:py-2 md:px-4 p-2 text-xs md:text-base rounded-xl md:-mr-0 ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
