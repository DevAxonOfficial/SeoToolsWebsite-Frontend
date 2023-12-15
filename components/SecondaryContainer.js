import React from "react";
import Image from "next/image";

const SecondaryContainer = () => {
  return (
    <div className="mb-8  ">
      <h1 className="font-bold text-3xl text-center ">
        Most Popular Pdf Tools
      </h1>
      <div className="mt-2 flex relative">
        <div className="w-[308px] h-[305px] bg-customColor1 shadow-gray-300 shadow-md rounded-[30px] m-10 ">
          <Image
            src="/img/Compress.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute mt-[45px] ml-[85px]"
          />
          <h1 className="absolute mt-[135px] ml-[65px] font-semibold text-lg text-center">
            Compress Pdf
          </h1>
          <Image
            src="/img/Group1.png"
            alt="group1"
            width={124}
            height={37}
            className="absolute mt-[200px] ml-[67px]"
          />
        </div>
        <div className="w-[308px] h-[305px] bg-customColor2 shadow-gray-300 shadow-md rounded-[30px] m-10 ">
          <Image
            src="/img/Merge.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute mt-[45px] ml-[89px]"
          />
          <h1 className="absolute mt-[135px] ml-[85px] font-semibold text-lg">
            Merge Pdf
          </h1>
          <Image
            src="/img/Group2.png"
            alt="group1"
            width={124}
            height={37}
            className="absolute mt-[200px] ml-[67px]"
          />
        </div>
        <div className="w-[308px] h-[305px] bg-customColor3 shadow-gray-300 shadow-md rounded-[30px] m-10 ">
          <Image
            src="/img/Split.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute mt-[45px] ml-[85px]"
          />
          <h1 className="absolute mt-[135px] ml-[85px] font-semibold text-lg">
            Split Pdf
          </h1>
          <Image
            src="/img/Group3.png"
            alt="group3"
            width={124}
            height={37}
            className="absolute mt-[200px] ml-[67px]"
          />
        </div>
        <div className="w-[308px] h-[305px] bg-customColor4 shadow-gray-300 shadow-md rounded-[30px] m-10 ">
          <Image
            src="/img/remove.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute mt-[45px] ml-[85px]"
          />
          <h1 className="absolute mt-[135px] ml-[70px] font-semibold text-lg">
            Remove Pages
          </h1>
          <Image
            src="/img/Group4.png"
            alt="group4"
            width={124}
            height={37}
            className="absolute mt-[200px] ml-[67px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
