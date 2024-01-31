"use client";
import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import AdContainer from "./Ad2Container";

export const scrollToSection = () => {
  // Scroll to the section using JavaScript
  const targetSection = document.getElementById("targetSection");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};
export const Components = () => {
  return (
    <>
      <div className=" shadow-lg   lg:flex lg:justify-between  sm:block sm:justify-center sm:items-center    ">
        <div className="  sm:justify-center sm:items-center xm:ml-6 lg:ml-36 ">
          <p className="font-light py-8  xm:text-center xm:text-lg sm:text-center sm:mx-auto  sm:text-2xl   xl:text-[34px] lg:text-2xl lg:text-start  ">
            <span className="font-bold lg:font-semibold xl:text-[42px] xm:text-xl  lg:text-2xl">
              Simplify SEO
            </span>
            <span> with our</span>
            <p className="mt-4">user-friendly approach</p>
          </p>

          <button
            onClick={scrollToSection}
            className="flex  xm:mx-auto  xm:px-4 xm:py-1 sm:mx-auto sm:px-6 sm:py-3 lg:mx-1   bg-red-400 hover:bg-red-300 text-white  rounded-[12px] "
          >
            View All <FaLongArrowAltRight className="ml-3 text-2xl " />
          </button>
        </div>
        <div className="xm:flex xm:justify-center sm:flex sm:justify-center ">
          <Image
            className="lg:mr-20 "
            src="/img/logo1.png"
            alt="logo1"
            width={504}
            height={440}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <AdContainer width={"w-[728px]"} height={"h-[90px]"} />
      </div>
    </>
  );
};
