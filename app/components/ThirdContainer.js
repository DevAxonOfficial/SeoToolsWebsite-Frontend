import React from "react";
import Card from "./Card";
import ToolCards from "./ToolCards";
import {
  PROMPS_POPULAR_PDF_TOOLS,
  PROMPS_FREE_SEO_TOOLS,
} from "../utils/constants";
import { Adsterra, Adsterra1, NativeBanner } from "../AdScript";

const ThirdContainer = () => {
  return (
    <div className="container mt-10 mx-auto">
      <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
      <div id="targetSection">
        <h1 className="font-bold md:text-3xl text-[27px]  my-10 text-center ">
          Most Popular PDF Tools
        </h1>
      </div>
      <div className="xs:grid xm:grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 xl:grid xl:grid-cols-6 ms:grid ms:grid-cols-4 xt:grid-cols-3 lg:grid-cols-4  -mx-12">
        {PROMPS_POPULAR_PDF_TOOLS.map((POPULAR_PDF_TOOLS, index) => (
          <ToolCards key={index} {...POPULAR_PDF_TOOLS} />
        ))}
      </div>
      <Adsterra1 slot={"1a26ef3314cb0fb63793eb96ad8c870c"} />
      <h2 className=" text-center my-10 xm:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Why Choose <strong>Our Tools</strong>
      </h2>
      <div className="flex justify-evenly  xm:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap">
        {PROMPS_FREE_SEO_TOOLS.map((SEO_TOOLS, index) => {
          return <Card key={index} {...SEO_TOOLS} />;
        })}
      </div>
      <NativeBanner />
    </div>
  );
};

export default ThirdContainer;
