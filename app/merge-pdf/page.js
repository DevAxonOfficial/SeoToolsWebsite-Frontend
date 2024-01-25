"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";

const Page = () => {
  return (
    <>
      <HandleDragnDrop
        backgroundImage={"/img/Rectangle23.png"}
        logoImage={"/img/Merge.png"}
        toolName={"Merge Pdf"}
        toolSpec={" Merge PDF"}
        bgColor={"bg-[#FDE1E1]"}
        apiEndpoint={"/api/mergePdf"}
      />
    </>
  );
};

export default Page;
