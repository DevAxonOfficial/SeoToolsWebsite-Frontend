import React from "react";
import Image from "next/image";

const SecondaryContainer = () => {
  return (
    <div className="mb-8  ">
      <h1 className="font-bold md:text-3xl text-[27px] text-center ">
        Most Popular Pdf Tools
      </h1>
      <div className="md:mt-6 md:flex flex-row relative">
        <div className="md:w-[308px] md:h-[305px] w-[250px] h-[250px] bg-customColor1 shadow-gray-300 shadow-md rounded-[30px] md:m-10 m-[64px]  md:mt-0 mt-1 ">
          <Image
            src="/img/Compress.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute md:mt-[45px] md:ml-[85px] sm:flex-row mt-[25px] ml-[83px]"
          />
          <h1 className="absolute md:mt-[135px] mt-[110px] ml-[65px] font-semibold text-lg text-center">
            Compress Pdf
          </h1>
          <Image
            src="/img/Group1.png"
            alt="group1"
            width={124}
            height={37}
            className="absolute md:mt-[200px] mt-[175px] md:ml-[67px] ml-[60px]"
          />
        </div>
        <div className="md:w-[308px] md:h-[305px] w-[250px] h-[250px] bg-customColor2 shadow-gray-300 shadow-md rounded-[30px] md:m-10 m-[64px]  md:-mt-0 -mt-6">
          <Image
            src="/img/Merge.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute md:mt-[45px] md:ml-[85px] sm:flex-row mt-[25px] ml-[83px]"
          />
          <h1 className="absolute md:mt-[135px] mt-[110px] ml-[80px] font-semibold text-lg text-center">
            Merge Pdf
          </h1>
          <Image
            src="/img/Group2.png"
            alt="group1"
            width={124}
            height={37}
            className="absolute md:mt-[200px] mt-[175px] md:ml-[67px] ml-[60px]"
          />
        </div>
        <div className="md:w-[308px] md:h-[305px] w-[250px] h-[250px] bg-customColor3 shadow-gray-300 shadow-md rounded-[30px] md:m-10 m-[64px]  md:-mt-0 -mt-6  ">
          <Image
            src="/img/Split.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute md:mt-[45px] md:ml-[85px] sm:flex-row mt-[25px] ml-[83px]"
          />
          <h1 className="absolute md:mt-[135px] mt-[110px] md:ml-[90px] ml-[85px] font-semibold text-lg text-center">
            Split Pdf
          </h1>
          <Image
            src="/img/Group3.png"
            alt="group3"
            width={124}
            height={37}
            className="absolute md:mt-[200px] mt-[175px] md:ml-[67px] ml-[60px]"
          />
        </div>
        <div className="md:w-[308px] md:h-[305px] w-[250px] h-[250px] bg-customColor4 shadow-gray-300 shadow-md rounded-[30px] md:m-10 m-[64px] md:-mb-0 -mb-3 md:-mt-0 -mt-6  ">
          <Image
            src="/img/remove.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute md:mt-[45px] md:ml-[85px] sm:flex-row mt-[25px] ml-[83px]"
          />
          <h1 className="absolute md:mt-[135px] mt-[110px] md:ml-[65px] ml-[60px] font-semibold text-lg text-center">
            Remove Pages
          </h1>
          <Image
            src="/img/Group4.png"
            alt="group4"
            width={124}
            height={37}
            className="absolute md:mt-[200px] mt-[175px] md:ml-[67px] ml-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
