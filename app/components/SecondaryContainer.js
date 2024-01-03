import React from "react";
import ToolCards from "./ToolCards";
const arrayOfCards = [
  {
    bgcolor: "#e4fbfe",
    logoimage: "/img/Compress.png",
    heading: "Compress Pdf",
    img2: "/img/Group1.png",
  },
  {
    bgcolor: "#fde1e1",
    logoimage: "/img/Merge.png",
    heading: "Merge Pdf",
    img2: "/img/Group2.png",
  },
  {
    bgcolor: "#dbf3f2",
    logoimage: "/img/Split.png",
    heading: "Split Pdf",
    img2: "/img/Group3.png",
  },
  {
    bgcolor: "#fdf8e1",
    logoimage: "/img/remove.png",
    heading: "Remove Pages",
    img2: "/img/Group4.png",
  },
];
const SecondaryContainer = () => {
  return (
    <div className="container mx-auto  ">
      <div>
        <h1 className="font-bold md:text-3xl text-[27px]   text-center ">
          Most Popular Pdf Tools
        </h1>
      </div>

      <div className="xl:grid xl:grid-cols-4 sm:grid sm:grid-cols-2 sm:gap-y-6 mx-auto xs:-ml-12 mt-10 xl:ml-0 lg:ml-28 md:ml-20 ">
        {arrayOfCards.map((cards, index) => (
          <ToolCards
            key={index}
            heading={cards.heading}
            logoimage={cards.logoimage}
            bgcolor={cards.bgcolor}
            img2={cards.img2}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
