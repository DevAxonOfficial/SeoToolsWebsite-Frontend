"use client";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [showImage, setShowImage] = useState(true);

  const toggleDropdown = () => {
   if (isOpen===false) {
    setIsOpen(true)
   }else{
    setIsOpen(false)
   }
  };
  return (
    <>
      <div className="bg-[#F2F2F2] flex sm:justify-between items-center ">
        <div className="flex   items-center ">
        <div className="ml-10">
          <Link href="/">
            <Image
              src="/img/logo2.png"
              alt="logo of company"
              width={200}
              height={10}
            />
          </Link>
        </div>
        <div className="hover:cursor-pointer mx-6 " onClick={toggleDropdown}>
          <p className="text-[#185058] flex font-bold">
            ALL Tools <FaCaretDown className="text-red-500" />
          </p>
        </div>
        <div className="xm:hidden">
          <ul className="flex">
            <li>
              <Link className=" mx-4 font-semibold text-[#185058]" href="/compress-pdf">Compress </Link>
            </li>
            <li>
              <Link className=" mx-4 font-semibold text-[#185058]" href="/merge-pdf">Merge</Link>
            </li>
            <li>
              <Link className=" mx-4 font-semibold text-[#185058]" href="/split-pdf">Split</Link>
            </li>
          </ul>
        </div>
        </div>
        <div className="sm:hidden  h-16 md:hidden lg:flex xs:hidden items-center mt-1 md:mt-0 md:mr-6 md:ml-0 ml-10">
        <div className="flex ml-4 md:ml-0 md:mr-2 mr-24 ">
          <button className="bg-transparent hover:shodow-lg text-black hover:text-black md:py-2 md:px-4 hover:border-transparent rounded md:text-base text-sm">
            Login
          </button>
        </div>
        <div className="flex">
          <button className="bg-red-500 hover:bg-red-300 text-white md:font-bold font-semibold md:py-2 md:px-4 p-2 text-xs md:text-base rounded-xl md:-mr-0 ">
            Sign Up
          </button>
        </div>
      </div>
      </div>
      {isOpen &&
          <div className="bg-[#F2F2F2] xm:ml-5 xm:block sm:flex justify-evenly" >
            <ul className=" py-3">
              <p className=" text-sm font-semibold text-gray-500"> Convert & Compress </p>
              <li className=" mt-3 py-1 px-3 hover:cursor-pointer hover:bg-[#185058] hover:text-white rounded ">
                <Link href="/compress-pdf">
                <div className="flex items-center ">
                <Image src="/img/Compress.png" alt="compress logo" width={30} height={30}   /> 
                <p className="font-medium px-5" >Compress PDF</p>
                </div>
                </Link>
              </li>
            </ul>
            <ul className="py-3">
            <p className="text-sm font-semibold text-gray-500"> Organize </p>
              <li className=" mt-3 py-1 px-3 hover:cursor-pointer hover:bg-[#f56767] hover:text-white rounded ">
                <Link href="/merge-pdf" >
                <div className="flex items-center ">
                <Image src="/img/Merge.png" alt="Merge logo" width={30} height={30}   /> 
                <p className="font-medium px-5" >Merge PDF</p>
                </div>
                </Link>
              </li>
              <li className="  py-1 px-3 hover:cursor-pointer hover:bg-[#4bc5bc] hover:text-white rounded ">
                <Link href="/split-pdf" >
                <div className="flex items-center ">
                <Image src="/img/Split.png" alt="Merge logo" width={30} height={30}   /> 
                <p className="font-medium px-5" >Split PDF</p>
                </div>
                </Link>
              </li>
              <li className=" py-1 px-3 hover:cursor-pointer hover:bg-[#f0d54d] hover:text-white rounded ">
                <Link href="/remove-pages" >
                <div className="flex items-center ">
                <Image src="/img/remove.png" alt="Remove Pages logo" width={30} height={30}   /> 
                <p className="font-medium px-5" >Remove Pages</p>
                </div>
                </Link>
              </li>
            </ul>
            <ul className="py-3 ">
            <p className="text-sm font-semibold text-gray-500"> Convert to PDF </p>
            <li className="mt-3 py-1 px-3 hover:cursor-pointer hover:bg-[#a981ff] hover:text-white rounded ">
                <Link href="/word-to-pdf" >
                <div className="flex  items-center ">
                <Image src="/img/WORD.png" alt="Word To Pdf logo" width={30} height={30}   /> 
                <p className="font-medium px-5" >Word To Pdf</p>
                </div>
                </Link>
              </li>
              <li className=" py-1 px-3 hover:cursor-pointer hover:bg-[#a981ff] hover:text-white rounded ">
                <Link href="/csv-to-pdf" >
                <div className="flex  items-center ">
                <Image src="/img/WORD.png" alt="CSV To Pdf logo" width={30} height={30}   /> 
                <p className="font-medium px-5" >CSV To Pdf</p>
                </div>
                </Link>
              </li>
              <li className=" py-1 px-3 hover:cursor-pointer hover:bg-[#a981ff] hover:text-white rounded ">
                <Link href="/txt-to-pdf" >
                <div className="flex  items-center ">
                <Image src="/img/WORD.png" alt="TXT To Pdf logo" width={30} height={30}   /> 
                <p className="font-medium px-5" >TXT To Pdf</p>
                </div>
                </Link>
              </li>
            </ul>
          </div>
          }
    </>
  );
};

export default Header;
