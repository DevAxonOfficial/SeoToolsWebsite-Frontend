"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";

const Page = () => {
  return (
    <>
      <HandleDragnDrop
        backgroundImage={"/img/Rectangle24.png"}
        logoImage={"/img/Split.png"}
        toolName={"Word To Pdf"}
        toolSpec={" Word To PDF"}
        bgColor={"bg-[#DBF3F2]"}
        apiEndpoint={"/api/anythingToPdf"}
      />
    </>
  );
};

export default Page;
