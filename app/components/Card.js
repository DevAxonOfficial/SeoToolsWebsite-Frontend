import React from "react";
import Image from "next/image";

const Card = (card) => {
  return (
    <div
      className="mt-3 w-[400px] h-[241px] rounded-3xl "
      style={{
        backgroundImage: `url('${"/img/Rectangle 31.png"}')`,
      }}
    >
      <div className="flex justify-center mt-9 ">
        <Image src={card.imgurl} width={80} height={80} />
      </div>
      <div>
        <p className="font-semibold text-2xl text-center my-1">{card.heading}</p>
      </div>
      <div>
        <p className="text-center px-5 leading-4 text-sm ">{card.detail}</p>
      </div>
    </div>
  );
};

export default Card;
