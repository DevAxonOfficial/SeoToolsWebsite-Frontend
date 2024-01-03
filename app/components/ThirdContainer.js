import React from "react";
import Card from "./Card";

const cardsObj = [
  {
    heading: "Fast & Effective Conversion:",
    imgurl: "/img/Group6.png",
    detail: "Our cutting-edge technology ensures that your files are converted",
  },
  {
    heading: "No Software Installation:",
    imgurl: "/img/Group7.png",
    detail: "Our web-based PDF converter eliminates the need for downloads or installations, allowing you to convert files hassle-free.",
  },{
    heading: "24/7 Positive Feedback:",
    imgurl: "/img/Group8.png",
    detail: "Receive comprehensive assistance whenever you require it, thanks to our 24/7 customer support.",
  },{
    heading: "Cost-Effective Solutions:",
    imgurl: "/img/Group9.png",
    detail: "Enjoy the benefits of a feature-rich PDF converter tool without breaking the bank.",
  },{
    heading: "People Trust Us:",
    imgurl: "/img/Group10.png",
    detail: "Our service has been utilized by over a billion users, streamlining their tasks with digital documents.",
  },{
    heading: "Regular Updates and Support:",
    imgurl: "/img/Group11.png",
    detail: "Our team is dedicated to providing regular updates to enhance functionality and address user needs.`",
  }
  // ... Add more card objects as needed
];
const ThirdContainer = () => {


  return (
    <div className="container mx-auto">
      <p className=" text-center xm:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
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
          )
      })}
      </div>
    </div>
  );
};

export default ThirdContainer;
