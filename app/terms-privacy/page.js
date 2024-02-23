"use client";
import React from "react";
import { useState } from "react";
import Terms from "../terms-privacy/Terms";
import Privacy from "../terms-privacy/Privacy";
const Page = () => {
  const [activeSection, setActiveSection] = useState("terms");

  const scrollToSection = (section) => {
    setActiveSection(section);
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="  justify-center md:flex">
      <div className=" relative md:sticky top-0 left-0 py-10 z-50">
        <div className="sticky top-10 left-10 z-50">
          <h2
            className={`p-5 hover:cursor-pointer  rounded-lg ${
              activeSection === "terms"
                ? "bg-[#e5eeff] font-bold"
                : "bg-transparent "
            }`}
            onClick={() => {
              scrollToSection("terms");
              //   setActiveSection("targetSection1");
            }}
          >
            Terms & Condition
          </h2>
          <h2
            className={`p-5 hover:cursor-pointer rounded-lg ${
              activeSection === "privacy"
                ? "bg-[#e5eeff] font-bold"
                : "bg-transparent"
            }`}
            onClick={() => {
              scrollToSection("privacy");
              //   setActiveSection("targetSection");
            }}
          >
            Privacy Policy
          </h2>
        </div>
      </div>
      <div className="md:w-2/3 px-10">
        {activeSection === "terms" && <Terms />}
        {activeSection === "privacy" && <Privacy />}
      </div>
    </div>
  );
};

export default Page;
