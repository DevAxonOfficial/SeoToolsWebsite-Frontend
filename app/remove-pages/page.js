"use client";
import HandleDragnDrop from "../components/HandleDragnDrop";

const Page = () => {
  return (
    <>
      <HandleDragnDrop
        backgroundImage={"/img/Rectangle22.png"}
        logoImage={"/img/remove.png"}
        toolName={"Remove Pages"}
        toolSpec={" Remove Pages"}
        bgColor={"bg-[#FDF8E1]"}
        apiEndpoint={"/api/removePdf"}
      />
    </>
  );
};

export default Page;
