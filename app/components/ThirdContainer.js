import React from "react";
import Card from "./Card";
import ToolCards from "./ToolCards";
import AdContainer from "./Ad2Container";
import { ARRAY_OF_CARDS, CARDS } from "../utils/constants";

const ThirdContainer = () => {
  return (
    <div className="container mt-10 mx-auto">
      <div id="targetSection">
        <h1 className="font-bold md:text-3xl text-[27px]  my-10 text-center ">
          Most Popular Pdf Tools
        </h1>
      </div>

      <div className="xs:grid xm:grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-6 -mx-4  ">
        {ARRAY_OF_CARDS.map((ARRAY_OF_CARDS, index) => (
          <ToolCards key={index} {...ARRAY_OF_CARDS} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <AdContainer width={"w-[970px]"} height={"h-[90px]"} />
      </div>
      <p className=" text-center my-10 xm:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Why Choose <strong>FREE SEO TOOLS </strong>
        Pdf?
      </p>
      <div className="flex justify-evenly  xm:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap">
        {CARDS.map((ArrayOfCards, index) => {
          return <Card key={index} {...ArrayOfCards} />;
        })}
      </div>
      <div className=" flex justify-center items-center">
        <AdContainer  width={"w-[468px]"} height={"h-[60px]"} />
      </div>
    </div>
  );
};

export default ThirdContainer;
