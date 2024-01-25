"use client";

import HandleDragnDrop from "./../components/HandleDragnDrop";

const Page = () => {
  return (
    <>
      <HandleDragnDrop
        backgroundImage={"/img/Rectangle25.png"}
        logoImage={"/img/compress.png"}
        toolName={"Compress Pdf"}
        toolSpec={" Compress PDF"}
        bgColor={"bg-[#EAEFF0]"}
        apiEndpoint={"/api/compressPdf"}
      />
    </>
  );
};

export default Page;
