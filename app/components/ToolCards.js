import React from "react";
import Image from "next/image";
const ToolCards = (cards) => {
  console.log(cards);
  return (
    <div
      className="flex flex-col items-center xs:mb-8 shadow-lg   w-[300px] h-[295px]  rounded-[35px]"
      style={{ background: `${cards.bgcolor}` }}
    >
      <div className="mt-14 ">
        <Image
          src={cards.logoimage}
          alt="compress"
          width={82}
          height={82}
          className=""
        />
      </div>
      <div>
        <h1 className="font-semibold mt-3">{cards.heading}</h1>
      </div>
      <div className="mt-10">
        <Image
          src={cards.img2}
          alt="group1"
          width={124}
          height={37}
          className=""
        />
      </div>
    </div>
  );
};

export default ToolCards;
