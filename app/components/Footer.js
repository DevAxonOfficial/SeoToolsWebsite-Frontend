import React from "react";
import { LiaCopyright } from "react-icons/lia";
import { GoHeartFill } from "react-icons/go";
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="py-10 bg-[#F7F7F7] mt-20 xm:block sm:flex sm:flex-wrap xl:justify-between xm:justify-center sm:justify-center ">
      <p className="flex  justify-center items-center xl:ml-10 xm:text-xs">
        <LiaCopyright className="w-8 h-8" /> SEOTOOLS by Devaxon - Made with
        <GoHeartFill className="text-red-600 w-5 h-5 mx-1" /> for our people
      </p>
      <div className="flex  flex-wrap lg:ml-3 xm:justify-center xm:my-2  sm:mt-2 sm:justify-center items-center">
        <div className="flex space-x-2 lg:ml-5 xm:mb-2 ">
          <Link href="https://www.linkedin.com/company/devaxon/">
            <div className="w-[30px] h-[30px] rounded-full border border-black flex justify-center items-center">
              <RiLinkedinFill />
            </div>
          </Link>

          <Link href="https://www.facebook.com/devaxonn?mibextid=LQQJ4d">
            <div className="w-[30px] h-[30px] rounded-full border border-black flex justify-center items-center">
              <RiFacebookFill />
            </div>
          </Link>
          <Link href="https://www.instagram.com/devaxonn/?igshid=MzRlODBiNWFlZA%3D%3D">
            <div className="w-[30px] h-[30px] rounded-full border border-black flex justify-center items-center">
              <TiSocialInstagram className="w-[18px] h-[18px]" />
            </div>
          </Link>
          <Link href="https://twitter.com/DevAxonn">
            <div className="w-[30px] h-[30px] rounded-full border border-black flex justify-center items-center">
              <IoLogoTwitter />
            </div>
          </Link>
        </div>
        <div className="flex mr-5 items-center xm:text-xs">
          <p className="mx-4">Terms & Conditions</p>
          <p className="mx-4">Contact us</p>
          <p className="flex items-center mx-4">
            <AiOutlineGlobal className="w-[30px] h-[30px]" /> English
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
