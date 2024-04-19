import React from "react";
import Image from "next/image";
import Link from "next/link";
const ToolCards = (cards) => {
  return (
    <Link className="w-[208px] h-[206px] my-5" href={`${cards.Link}`}>
      <div
        className=" xm:mx-auto sm:mx-auto  xm:my-6 sm:my-6 flex justify-evenly items-center w-[209px] h-[207px] shadow-lg rounded-[18px]"
        style={{ background: `${cards.bgcolor}` }}
      >
        <div className="">
          <div className="flex justify-center items-center ">
            <Image
              src={cards.logoImage}
              alt={cards.alt1}
              width={55}
              height={55}
            />
          </div>
          <div>
            <h1 className="font-semibold text-base mt-2 text-center">
              {cards.heading}
            </h1>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <Image src={cards.img2} alt={cards.alt2} width={84} height={25} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToolCards;
