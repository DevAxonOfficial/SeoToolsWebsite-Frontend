"use client";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ALL_TOOLS, ArrayOfUl } from "../utils/constants";
import { Tools } from "../utils/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            {isOpen ? (
              <p className="text-blue-400 flex font-bold">
                ALL Tools <FaCaretUp className="text-blue-400 text-2xl" />
              </p>
            ) : (
              <p className="text-[#185058] flex font-bold">
                ALL Tools <FaCaretDown className="text-red-500 text-2xl" />
              </p>
            )}
          </div>
          <div className="xm:hidden">
            <ul className="flex">
              {Tools.map((Tool, index) => (
                <li key={index}>
                  <Link
                    className=" mx-4 font-semibold text-[#185058]"
                    href={Tool.Url}
                  >
                    {Tool.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href="https://www.producthunt.com/posts/seotoolsbydevaxon?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-seotoolsbydevaxon"
          target="_blank"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=437708&theme=light"
            alt="seotoolsbydevaxon - everyday&#0045;use&#0032;tool&#0032;hub&#0044;&#0032;completely&#0032;free&#0032;of&#0032;charge&#0046; | Product Hunt"
            width="250"
            height="54"
          />
        </a>
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
      {isOpen && (
        <div className="absolute w-full shadow-2xl bg-[#f2efef] xm:pl-5 xm:block sm:flex justify-evenly">
          <div className=" mb-4 text-sm font-semibold text-gray-500">
            Convert & Compress
            {ALL_TOOLS.convert_and_compress.map((Tool, index) => {
              return (
                <ul key={index}>
                  <li
                    className={` py-1 px-3 hover:cursor-pointer ${Tool.BgColor} hover:text-white rounded `}
                  >
                    <Link href={`${Tool.UrlLink}`}>
                      <div
                        onClick={toggleDropdown}
                        className="flex items-center "
                      >
                        <Image
                          src={Tool.Image}
                          alt={Tool.Alt}
                          width={30}
                          height={30}
                        />
                        <p className="font-medium px-5">{Tool.LiName}</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className=" mb-4 text-sm font-semibold text-gray-500">
            Organize
            {ALL_TOOLS.Organize.map((tool, index) => {
              return (
                <ul key={index}>
                  <li
                    className={`  py-1 px-3 hover:cursor-pointer ${tool.BgColor} hover:text-white rounded `}
                  >
                    <Link href={`${tool.UrlLink}`}>
                      <div
                        onClick={toggleDropdown}
                        className="flex items-center "
                      >
                        <Image
                          src={tool.Image}
                          alt={tool.Alt}
                          width={30}
                          height={30}
                        />
                        <p className="font-medium px-5">{tool.LiName}</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className=" mb-4 text-sm font-semibold text-gray-500">
            Convert to PDF
            {ALL_TOOLS.Convert_to_PDF.map((tool, index) => {
              return (
                <ul key={index}>
                  <li
                    className={`  py-1 px-3 hover:cursor-pointer ${tool.BgColor} hover:text-white rounded `}
                  >
                    <Link href={`${tool.UrlLink}`}>
                      <div
                        onClick={toggleDropdown}
                        className="flex items-center "
                      >
                        <Image
                          src={tool.Image}
                          alt={tool.Alt}
                          width={30}
                          height={30}
                        />
                        <p className="font-medium px-5">{tool.LiName}</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
