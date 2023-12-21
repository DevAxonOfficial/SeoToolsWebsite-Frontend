import React from "react";
import Image from "next/image";

const SecondaryContainer = () => {
  return (
    <div className="mb-8  ">
      <h1 className="font-bold md:text-4xl text-[27px] text-center ">
        Most Popular Pdf Tools
      </h1>
      <div className="md:mt-6 md:ml-6 md:flex flex-row relative">
        <div className="md:w-[318px] md:h-[315px] w-[250px] h-[250px] bg-customColor1 shadow-gray-300 shadow-md rounded-[30px] md:mr-10  m-[64px]  md:mt-0 mt-1 ">
          <Image
            src="/img/Compress.png"
            alt="compress"
            width={92}
            height={92}
            className="absolute md:mt-[45px] md:ml-[110px] sm:flex-row mt-[25px] ml-[83px] md:w-[92px] w-[82px]"
          />
          <h1 className="absolute md:mt-[145px] md:ml-[80px] mt-[110px] ml-[65px] font-semibold md:text-xl text-center">
            Compress PDF
          </h1>
          <Image
            src="/img/Group1.png"
            alt="group1"
            width={124}
            height={37}
            className="absolute md:mt-[220px] mt-[175px] md:ml-[85px] ml-[60px] md:w-[140px]"
          />
        </div>
        <div className="md:w-[318px] md:h-[315px] w-[250px] h-[250px] bg-customColor2 shadow-gray-300 shadow-md rounded-[30px] md:m-10 m-[64px]  md:-mt-0 -mt-6">
          <Image
            src="/img/Merge.png"
            alt="merge"
            width={82}
            height={82}
            className="absolute md:mt-[45px] md:ml-[110px] sm:flex-row mt-[25px] ml-[83px] md:w-[92px]"
          />
          <h1 className="absolute md:mt-[145px] mt-[110px] md:ml-[105px] ml-[80px] font-semibold md:text-xl text-lg text-center">
            Merge Pdf
          </h1>
          <Image
            src="/img/Group2.png"
            alt="group1"
            width={124}
            height={37}
            className="absolute md:mt-[220px] mt-[175px] md:ml-[85px] ml-[60px] md:w-[140px]"
          />
        </div>
        <div className="md:w-[318px] md:h-[315px] w-[250px] h-[250px] bg-customColor3 shadow-gray-300 shadow-md rounded-[30px] md:m-10 m-[64px]  md:-mt-0 -mt-6  ">
          <Image
            src="/img/Split.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute md:mt-[45px] md:ml-[110px] sm:flex-row mt-[25px] ml-[83px] md:w-[92px]"
          />
          <h1 className="absolute md:mt-[145px] mt-[110px] md:ml-[110px] ml-[85px] font-semibold text-lg text-center md:text-xl">
            Split Pdf
          </h1>
          <Image
            src="/img/Group3.png"
            alt="group3"
            width={124}
            height={37}
            className="absolute md:mt-[220px] mt-[175px] md:ml-[85px] ml-[60px] md:w-[140px]"
          />
        </div>
        <div className="md:w-[318px] md:h-[315px] w-[250px] h-[250px] bg-customColor4 shadow-gray-300 shadow-md rounded-[30px] md:m-10 m-[64px] md:-mb-0 -mb-3 md:-mt-0 -mt-6  ">
          <Image
            src="/img/remove.png"
            alt="compress"
            width={82}
            height={82}
            className="absolute md:mt-[45px] md:ml-[110px] sm:flex-row mt-[25px] ml-[83px] md:w-[92px]"
          />
          <h1 className="absolute md:mt-[145px] mt-[110px] md:ml-[85px] ml-[60px] font-semibold text-lg md:text-xl text-center">
            Remove Pages
          </h1>
          <Image
            src="/img/Group4.png"
            alt="group4"
            width={124}
            height={37}
            className="absolute md:mt-[220px] mt-[175px] md:ml-[85px] ml-[60px] md:w-[140px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
