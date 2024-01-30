import React from "react";
import Image from "next/image";

const Card = (Card) => {
  return (
    <div
      className="mt-3 w-[400px] h-[241px] rounded-3xl "
      style={{
        backgroundImage: `url('${"/img/Rectangle 31.png"}')`,
      }}
    >
      <div className="flex justify-center mt-9 ">
        <Image src={Card.ImgUrl} alt="card" width={80} height={80} />
      </div>
      <div>
        <p className="font-semibold text-2xl text-center my-1">
          {Card.Heading}
        </p>
      </div>
      <div>
        <p className="text-center px-5 leading-4 text-sm ">{Card.Detail}</p>
      </div>
    </div>
  );
};

export default Card;
