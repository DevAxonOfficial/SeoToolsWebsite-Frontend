import React from "react";
import Card from "./Card";
import ToolCards from "./ToolCards";
import AdContainer from "./Ad2Container";
import {
  PROMPS_POPULAR_PDF_TOOLS,
  PROMPS_FREE_SEO_TOOLS,
} from "../utils/constants";
import AdScript from "../AdScript";

const ThirdContainer = () => {
  return (
    <div className="container mt-10 mx-auto">
      <AdScript />
      <div id="targetSection">
        <h1 className="font-bold md:text-3xl text-[27px]  my-10 text-center ">
          Most Popular Pdf Tools
        </h1>
      </div>

      <div className="xs:grid xm:grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-6 -mx-4  ">
        {PROMPS_POPULAR_PDF_TOOLS.map((POPULAR_PDF_TOOLS, index) => (
          <ToolCards key={index} {...POPULAR_PDF_TOOLS} />
        ))}
      </div>
      <p className=" text-center my-10 xm:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Why Choose <strong>FREE SEO TOOLS </strong>
        Pdf?
      </p>
      <div className="flex justify-evenly  xm:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap">
        {PROMPS_FREE_SEO_TOOLS.map((SEO_TOOLS, index) => {
          return <Card key={index} {...SEO_TOOLS} />;
        })}
      </div>
    </div>
  );
};

export default ThirdContainer;
