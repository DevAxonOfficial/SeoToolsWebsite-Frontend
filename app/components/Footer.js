import React from "react";
import { LiaCopyright } from "react-icons/lia";
import { GoHeartFill } from "react-icons/go";
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="py-10 bg-[#F7F7F7] mt-20 xm:block sm:flex sm:flex-wrap xl:justify-between xm:justify-center sm:justify-center ">
      <p className="flex  justify-center items-center xl:ml-10 xm:text-xs">
        <LiaCopyright className="w-8 h-8" /> SEOTOOLS by DevAxon - Made with
        <GoHeartFill className="text-red-600 w-5 h-5 mx-1" /> for our people
      </p>
      <div className="flex  flex-wrap lg:ml-3 xm:justify-center xm:my-2  sm:mt-2 sm:justify-center items-center">
        <div className="flex space-x-2 lg:ml-5 xm:mb-2 ">
          <div className="w-[30px] h-[30px]  rounded-full border border-black flex justify-center items-center focus:outline-none hover:bg-[#0a66c2] hover:text-white hover:scale-125 hover:transition hover:ease-in hover:border-none  ">
            <Link
              href="https://www.linkedin.com/company/devaxon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinFill />
            </Link>
          </div>

          <div className="w-[30px] h-[30px] rounded-full border border-black flex justify-center items-center focus:outline-none hover:bg-[#0866FF] hover:text-white hover:scale-125 hover:transition hover:ease-in hover:border-none">
            <Link
              href="https://www.facebook.com/devaxonn?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookFill />
            </Link>
          </div>

          <div className="w-[30px] h-[30px] rounded-full border border-black flex justify-center items-center focus:outline-none hover:text-white hover:scale-125 hover:transition hover:ease-in hover:border-none hover:bg-gradient-to-tr hover:from-[#feda75] hover:from-20% hover:via-[#fa7e1e] hover:via-30% hover:to-[#d62976] hover:to-50% ">
            <Link
              href="https://www.instagram.com/devaxonn/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialInstagram className="w-[18px] h-[18px]" />
            </Link>
          </div>

          <div className="w-[30px] h-[30px] rounded-full border border-black flex justify-center items-center focus:outline-none hover:bg-black hover:text-white hover:scale-125 hover:transition hover:ease-in hover:border-none">
            <Link
              href="https://twitter.com/DevAxonn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXFill />
            </Link>
          </div>
        </div>
        <div className="flex mr-5 items-center xm:text-xs">
          <p className="mx-4">Terms & Conditions</p>
          <Link
            className="hover:underline"
            target="_blank"
            href="https://devaxon.com/contactus/"
          >
            <p className="mx-4">Contact us</p>
          </Link>
          <p className="flex items-center mx-4">
            <AiOutlineGlobal className="w-[30px] h-[30px]" /> English
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
