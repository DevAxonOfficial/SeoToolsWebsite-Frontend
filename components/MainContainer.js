import React from "react";
import Image from "next/image";
const MainContainer = () => {
  return (
    <div className="w-[1345px] h-[480px] flex shadow-md ">
      <div className="w-[490px] h-[120px] mt-32 ml-16 p-2 ">
        <p className=" ">
          <span className="font-semibold text-[42px]">Simplify PDFs</span>
          <span className="text-[42px] ml-3">
            with our <br /> user-friendly approach.
          </span>
        </p>
        <div className="ml-5 mt-4">
          <button class="bg-red-500 hover:bg-red-300 text-white py-2 px-6 rounded-lg">
            Edit Pdf➡
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end ml-44">
        <Image src="/img/logo1.png" alt="logo1" width={504} height={440} />
      </div>
    </div>
  );
};

export default MainContainer;
