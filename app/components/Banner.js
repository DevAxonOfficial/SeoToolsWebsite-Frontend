"use client";
import React from "react";
const Banner = () => {
  const scrollToSection = () => {
    // Scroll to the section using JavaScript
    const targetSection = document.getElementById("targetSection");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="relative "
      style={{
        backgroundImage: "url('/img/Rectangle 20.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "250px",
      }}
    >
      <div className="grid grid-rows-1 ">
        <div className="flex flex-row justify-center items-center mt-16">
          <h1 className="lg:text-5xl md:text-3xl xs:text-xl font-semibold text-white mb-7">
            Make your easy tasks even easier.
          </h1>
        </div>
        <div className="flex justify-center">
          <button
            onClick={scrollToSection}
            className=" bg-red-500 hover:bg-red-300 text-white py-3 px-10  text-lg rounded-lg text-left"
          >
            View All ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
