"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Function to toggle dropdown visibility
  };
  const closeDropdown = () => {
    setIsOpen(false); // Function to close dropdown
  };
  return (
    <div className=" h-[90px] bg-customHeader flex flex-col md:flex-row justify-center items-center md:h-[90px] md:justify-between md:items-center shadow-lg">
      <div className=" md:h-[90px] md:w-auto ml-0 md:ml-7 mb-0 md:mb-0 md:mr-0 mr-[170px] md:mt-0 mt-2 absolute ">
        <Image src="/img/logo.png" alt="logo" width={270} height={60} />
      </div>
      <div className="flex items-center md:space-x-10 md:mr-20 relative">
        {/* Mobile Dropdown */}
        <div className="md:hidden mt-0 ml-[200px]">
          <button
            onClick={toggleDropdown}
            className="text-black rounded-lg p-2 flex items-center"
          >
            All Pdf Tools
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
                Split Pdf
              </Link>
              <Link
                href="/mergepdf"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black"
              >
                Merge Pdf
              </Link>
              <Link
                href="/"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black"
              >
                Compress Pdf
              </Link>
              <Link
                href="/removepages"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black"
              >
                Remove Pages
              </Link>
              <div className="justify-between space-x-4 ml-5">
                <button class="bg-transparent hover:shodow-lg text-black hover:text-black md:py-2 md:px-4 hover:border-transparent rounded md:text-base text-sm">
                  Login
                </button>
                <button class="bg-red-500 hover:bg-red-300 text-white md:font-bold font-semibold md:py-2 md:px-4 p-2 text-xs md:text-base rounded-xl md:-mr-0 ">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex items-center md:space-x-10 md:mr-20 ml-0 md:ml-30 text-lg ">
        <Link href="/" className="text-black  rounded-lg p-2 flex">
          All Pdf Tools
          <Image
            src="/img/down 1.png"
            alt="down"
            width={14}
            height={14}
            className="hidden md:block ml-[105px] mt-[7px] absolute"
          />
        </Link>
        <Link href="/" className="text-black  rounded-lg p-2">
          Split Pdf
        </Link>
        <Link
          prefetch={false}
          href="/mergepdf"
          className="text-black  rounded-lg p-2"
        >
          Merge Pdf
        </Link>
        <Link href="/" className="text-black  rounded-lg p-2 flex">
          Compress Pdf
          <Image
            src="/img/down 1.png"
            alt="down"
            width={14}
            height={14}
            className="hidden md:block ml-[120px] mt-[7px] absolute"
          />
        </Link>
        <Link href="/removepages" className="text-black  rounded-lg p-2">
          Remove Pages
        </Link>
      </div>
      <div className="hidden  h-16 md:flex items-center mt-1 md:mt-0 md:mr-6 md:ml-0 ml-10">
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
