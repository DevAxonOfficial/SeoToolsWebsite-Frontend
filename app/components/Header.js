"use client";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ALL_TOOLS, ArrayOfUl } from "../utils/constants";
import { Tools } from "../utils/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(true);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="bg-[#F2F2F2] flex sm:justify-between items-center shadow-lg">
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
            ALL Tools <FaCaretDown className="text-red-500 text-2xl" />
          </p>
        </div>
        <div className="xm:hidden">
          <ul className="flex">
            {Tools.map((Tool,index) => (
              <li key={index}>
              <Link className=" mx-4 font-semibold text-[#185058]" href={Tool.Url}>{Tool.Name}</Link>
            </li>
            ))}
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
          <div className=" bg-[#F2F2F2] xm:pl-5 xm:block sm:flex justify-evenly" >
              <p className=" mb-4 text-sm font-semibold text-gray-500"> Convert And Compress  
            {ALL_TOOLS.convert_and_compress.map((Tool, index)=>{
              
              return(
              <ul key={index}>
              
              <li className={` py-1 px-3 hover:cursor-pointer ${Tool.BgColor} hover:text-white rounded `}>
                <Link href={`${Tool.UrlLink}`}>
                <div className="flex items-center ">
                <Image src={Tool.Image} alt={Tool.Alt} width={30} height={30}   /> 
                <p className="font-medium px-5" >{Tool.LiName}</p>
                </div>
                </Link>
              </li>
            </ul>)
            })}
            </p>
            <div className=" mb-4 text-sm font-semibold text-gray-500"> Organize
            {ALL_TOOLS.Organize.map((tool, index)=>{
              return(
              <ul  key={index}>
              <li className={`  py-1 px-3 hover:cursor-pointer ${tool.BgColor} hover:text-white rounded `}>
                <Link href={`${tool.UrlLink}`}>
                <div className="flex items-center ">
                <Image src={tool.Image} alt={tool.Alt} width={30} height={30}   /> 
                <p className="font-medium px-5" >{tool.LiName}</p>
                </div>
                </Link>
              </li>
            </ul>)
            })}
            </div>
            <p className=" mb-4 text-sm font-semibold text-gray-500"> Convert to PDF
            {ALL_TOOLS.Convert_to_PDF.map((tool, index)=>{
              return(
              <ul  key={index}>
              <li className={`  py-1 px-3 hover:cursor-pointer ${tool.BgColor} hover:text-white rounded `}>
                <Link href={`${tool.UrlLink}`}>
                <div className="flex items-center ">
                <Image src={tool.Image} alt={tool.Alt} width={30} height={30}   /> 
                <p className="font-medium px-5" >{tool.LiName}</p>
                </div>
                </Link>
              </li>
            </ul>)
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
