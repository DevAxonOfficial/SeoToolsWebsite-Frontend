import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative mb-24">
      <div className="">
        <Image
          src="/img/Rectangle 20.png"
          alt="Banner"
          layout="responsive"
          width={1440}
          height={250}
          className="w-full "
        />
      </div>
      <div className="absolute inset-0 flex justify-center text-white md:mb-20 md:text-5xl md:font-semibold mb-7 items-center">
        <h1>Make your easy tasks even easier.</h1>
      </div>
      <div className="absolute flex inset-0 md:py-3 md:px-10 md:w-22 md:h-24 items-center justify-center md:mt-36 mt-9">
        <button class="bg-red-500 hover:bg-red-300 text-white md:py-3 md:px-10 p-2 md:text-lg text-xs rounded-lg text-left md:w-[200px]">
          Edit Pdf ➡
        </button>
      </div>
    </div>
  );
};

export default Banner;
