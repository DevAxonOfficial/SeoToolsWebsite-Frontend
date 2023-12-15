import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative mb-24">
      <Image
        src="/img/Rectangle 20.png"
        alt="Banner"
        layout="responsive"
        width={1440}
        height={250}
        className="w-full "
      />
      <div className="absolute inset-0 flex justify-center text-white mb-20 text-4xl items-center">
        <h1>Make your easy tasks even easier.</h1>
      </div>
      <div className="absolute flex inset-0 py-3 px-10 w-22 h-24 items-center justify-center mt-24 ">
        <button class="bg-red-500 hover:bg-red-300 text-white py-3 px-10 rounded-lg text-left">
          Edit Pdf ➡
        </button>
      </div>
    </div>
  );
};

export default Banner;
