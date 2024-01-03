import React from "react";
import Image from "next/image";
const ToolCards = (cards) => {
  return (
    <div
      className=" xm:mx-auto sm:mx-auto  xm:my-6 sm:my-6 flex justify-evenly items-center  w-[308px] h-[305px] shadow-md rounded-[35px]"
      style={{ background: `${cards.bgcolor}` }}
    >
      <div className="">
      <div className="flex justify-center items-center ">
        <Image
          src={cards.logoimage}
          alt="compress"
          width={82}
          height={82}
          className=""
        />
      </div>
      <div>
        <h1 className="font-semibold text-lg mt-2 text-center">{cards.heading}</h1>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <Image
          src={cards.img2}
          alt="group1"
          width={124}
          height={37}
          className=""
        />
      </div>
      </div>
    </div>
  );
};

export default ToolCards;
