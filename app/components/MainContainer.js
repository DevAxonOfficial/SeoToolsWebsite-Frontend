import React from "react";
import Image from "next/image";
const MainContainer = () => {
  return (
    <div className="h-[480px] flex shadow-md ">
      <div className="md:w-[490px] h-[120px] md:mt-32 md:ml-16 p-2 mt-14 ml-8 ">
        <p className="md:w-auto w-[300px] ">
          <span className=" md:text-[42px] text-[27px]">
            <strong className="font-bold">Simplify PDFs</strong> with our <br />{" "}
            user-friendly approach.
          </span>
          {/* <span className="md:text-[42px] ml-3">
            with our <br /> user-friendly approach.
          </span> */}
        </p>
        <div className="ml-5 mt-4">
          <button class="bg-red-500 hover:bg-red-300 text-white md:py-2 md:px-6 px-4 p-2 rounded-lg md:text-base text-sm">
            Edit Pdf➡
          </button>
        </div>
      </div>
      <div className="md:hidden w-[300px] h-[300px] absolute mt-[200px] ml-[50px]">
        <Image src="/img/logo1.png" alt="logo1" width={304} height={240} />
      </div>
      <div className="hidden sm:hidden xl:flex lg:flex md:flex items-center justify-end ml-44">
        <Image src="/img/logo1.png" alt="logo1" width={504} height={440} />
      </div>
    </div>
  );
};

export default MainContainer;
