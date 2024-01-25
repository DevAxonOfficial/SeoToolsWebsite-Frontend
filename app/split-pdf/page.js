"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";

const Page = () => {
  return (
    <>
      <HandleDragnDrop
        backgroundImage={"/img/Rectangle24.png"}
        logoImage={"/img/Split.png"}
        toolName={"Split Pdf"}
        toolSpec={" Split PDF"}
        bgColor={"bg-[#DBF3F2]"}
        apiEndpoint={"/api/splitPdf"}
      />
    </>
  );
};

export default Page;
