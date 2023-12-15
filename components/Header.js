import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-[1345px] h-[90px] bg-customHeader flex shadow-lg">
      <div className="w-[280px] h-[119px] ml-6">
        <Image src="/img/logo.png" alt="logo" width={270} height={60} />
      </div>
      <div className="flex items-center space-x-5 ml-2">
        <Link href="/" className="text-black  rounded-lg p-2 flex">
          All Pdf Tools
          <Image
            src="/img/down 1.png"
            alt="down"
            width={14}
            height={14}
            className="flex ml-[97px] mt-[7px] absolute"
          />
        </Link>
        <Link href="/" className="text-black  rounded-lg p-2">
          Split Pdf
        </Link>
        <Link href="/" className="text-black  rounded-lg p-2">
          Merge Pdf
        </Link>
        <Link href="/" className="text-black  rounded-lg p-2 flex">
          Compress Pdf
          <Image
            src="/img/down 1.png"
            alt="down"
            width={14}
            height={14}
            className="flex ml-[110px] mt-[7px] absolute"
          />
        </Link>
        <Link href="/" className="text-black  rounded-lg p-2">
          Remove Pages
        </Link>
      </div>
      <div className="h-16 flex items-center mt-[13px]">
        <div className="flex ml-44 mr-2  ">
          <button class="bg-transparent hover:shodow-lg text-black   hover:text-black py-2 px-4 hover:border-transparent rounded">
            Login
          </button>
        </div>
        <div className="flex">
          <button class="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-xl">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
