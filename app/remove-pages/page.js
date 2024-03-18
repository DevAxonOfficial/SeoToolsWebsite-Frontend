"use client";
import dynamic from "next/dynamic";
import HandleDragnDrop from "../components/HandleDragnDrop";
const FileConverter = dynamic(() => import("../components/FileConverter"), {
  ssr: false,
});
import { REMOVE_TOOL_PROPS } from "../utils/constants";
import { Adsterra, Adsterra1 } from "../AdScript";
import { useState } from "react";
import Content from "../utils/content";
const Page = () => {
  const [file, setFile] = useState(null);
  return (
    <>
      <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
      <HandleDragnDrop {...REMOVE_TOOL_PROPS} setUpperFile={setFile} />
      <Adsterra1 slot={"1a26ef3314cb0fb63793eb96ad8c870c"} />
      {file && <FileConverter pdfUrl={URL.createObjectURL(file)} />}
      <Content {...REMOVE_TOOL_PROPS} />
    </>
  );
};

export default Page;
