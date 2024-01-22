import React from "react";
import Card from "./Card";
import ToolCards from "./ToolCards";
import AdContainer from "./Ad2Container";

const arrayOfCards = [
  {
    bgcolor: "#e4fbfe",
    logoimage: "/img/Compress.png",
    heading: "Compress Pdf",
    img2: "/img/Group1.png",
    Link: "/compress-pdf",
  },
  {
    bgcolor: "#fde1e1",
    logoimage: "/img/Merge.png",
    heading: "Merge Pdf",
    img2: "/img/Group2.png",
    Link: "/merge-pdf",
  },
  {
    bgcolor: "#dbf3f2",
    logoimage: "/img/Split.png",
    heading: "Split Pdf",
    img2: "/img/Group3.png",
    Link: "/split-pdf",
  },
  {
    bgcolor: "#fdf8e1",
    logoimage: "/img/remove.png",
    heading: "Remove Pages",
    img2: "/img/Group4.png",
    Link: "/remove-pages",
  },
];

const cardsObj = [
  {
    heading: "Fast & Effective Conversion:",
    imgurl: "/img/Group6.png",
    detail: "Our cutting-edge technology ensures that your files are converted",
  },
  {
    heading: "No Software Installation:",
    imgurl: "/img/Group7.png",
    detail:
      "Our web-based PDF converter eliminates the need for downloads or installations, allowing you to convert files hassle-free.",
  },
  {
    heading: "24/7 Positive Feedback:",
    imgurl: "/img/Group8.png",
    detail:
      "Receive comprehensive assistance whenever you require it, thanks to our 24/7 customer support.",
  },
  {
    heading: "Cost-Effective Solutions:",
    imgurl: "/img/Group9.png",
    detail:
      "Enjoy the benefits of a feature-rich PDF converter tool without breaking the bank.",
  },
  {
    heading: "People Trust Us:",
    imgurl: "/img/Group10.png",
    detail:
      "Our service has been utilized by over a billion users, streamlining their tasks with digital documents.",
  },
  {
    heading: "Regular Updates and Support:",
    imgurl: "/img/Group11.png",
    detail:
      "Our team is dedicated to providing regular updates to enhance functionality and address user needs.`",
  },
];
const ThirdContainer = () => {
  return (
    <div className="container mt-10 mx-auto">
      <div id="targetSection">
        <h1 className="font-bold md:text-3xl text-[27px]  my-10 text-center ">
          Most Popular Pdf Tools
        </h1>
      </div>

      <div className="xs:grid xm:grid-cols-1 sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 xl:grid xl:grid-cols-4  ">
        {arrayOfCards.map((cards, index) => (
          <ToolCards
            key={index}
            Link={cards.Link}
            heading={cards.heading}
            logoimage={cards.logoimage}
            bgcolor={cards.bgcolor}
            img2={cards.img2}
          />
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
        {cardsObj.map((card, index) => {
          return (
            <Card
              key={index}
              heading={card.heading}
              imgurl={card.imgurl}
              detail={card.detail}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <AdContainer width={"w-[468px]"} height={"h-[60px]"} />
      </div>
    </div>
  );
};

export default ThirdContainer;
