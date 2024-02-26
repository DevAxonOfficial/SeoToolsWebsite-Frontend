import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Content = ({ ...seo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = 50; // Adjust this value based on when you want the transition to complete

      // Calculate scroll direction
      const scrollDirection = scrolled > prevScrollY ? "down" : "up";

      // Calculate opacity based on scroll position
      const opacity = Math.min(1, scrolled / maxScroll);

      // Update opacity based on scroll direction
      if (scrollDirection === "down") {
        setScrollOpacity(opacity);
      } else {
        setScrollOpacity(1 - opacity);
      }

      // Update previous scroll position
      setPrevScrollY(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <div className=" mt-10">
        <div className="py-10">
          <h1 className="text-4xl text-center py-6 font-bold">{seo.Title}</h1>
          <p
            className="fade-container w-8/12 mx-auto md:order-first lg:order-last"
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {seo.Description}
          </p>
        </div>
        <div className="justify-center   items-center grid lg:grid-cols-2  ">
          <div
            className="fade-container mx-auto md:order-first lg:order-last"
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={seo.Img1}
              width={600}
              height={600}
              alt="content"
              className="mx-auto "
            />
          </div>
          <div className="w- px-8 mx-auto py-20 md:order-last lg:order-first">
            <h2 className="font-bold text-2xl py-4">{seo.Heading1}</h2>
            <p className="fade-container mx-auto md:order-first lg:order-last">
              {seo.Description1}
            </p>
          </div>
        </div>
        <div className="justify-center   items-center grid lg:grid-cols-2  ">
          <div
            className=" mx-auto    "
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={seo.Img2}
              width={600}
              height={600}
              alt="content"
              className="mx-auto "
            />
          </div>
          <div className=" px-8 py-20 ">
            <h2 className="font-bold text-xl py-4">{seo.Heading2}</h2>
            <h2 className="font-semibold text-lg py-4">{seo.subHeading1}</h2>
            <p className=" text-balance ">{seo.subHeadingDescription1}</p>
            <h2 className="font-semibold  text-lg py-4">{seo.subHeading2}</h2>
            <p className=" text-balance ">{seo.subHeadingDescription2}</p>
          </div>
        </div>
        <div className="justify-center items-center grid lg:grid-cols-2  ">
          <div
            className=" mx-auto md:order-first   lg:order-last "
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={seo.Img3}
              width={600}
              height={600}
              alt="content"
              className="mx-auto "
            />
          </div>
          <div className="w- px-8 py-20 mx-auto md:order-last lg:order-first">
            <h2 className="font-semibold text-lg py-4">{seo.subHeading3}</h2>
            <p className=" text-balance ">{seo.subHeadingDescription3}</p>
            <h2 className="font-semibold  text-lg py-4">{seo.subHeading4}</h2>
            <p className=" text-balance ">{seo.subHeadingDescription4}</p>
          </div>
        </div>
        <div className="justify-center  items-center grid lg:grid-cols-2  ">
          <div
            className=" mx-auto"
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={seo.Img4}
              width={600}
              height={600}
              alt="content"
              className="mx-auto "
            />
          </div>
          <div className="px-8 py-20">
            <h2 className="font-bold text-xl py-4">{seo.Heading3}</h2>
            <h2 className="font-semibold text-lg py-4">{seo.subHeading5}</h2>
            <p className=" text-balance ">{seo.subHeadingDescription5}</p>
            <h2 className="font-semibold  text-lg py-4">{seo.subHeading6}</h2>
            <p className=" text-balance ">{seo.subHeadingDescription6}</p>
            <h2 className="font-semibold  text-lg py-4">{seo.subHeading7}</h2>
            <p className=" text-balance ">{seo.subHeadingDescription7}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
