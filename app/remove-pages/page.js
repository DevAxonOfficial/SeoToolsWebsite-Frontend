"use client";
import dynamic  from "next/dynamic"
import HandleDragnDrop from "../components/HandleDragnDrop";
const FileConverter = dynamic(() => import("../components/FileConverter"), { ssr: false})
// import FileConverter from "../components/FileConverter";
import { REMOVE_TOOL_PROPS } from "../utils/constants";
import {Adsterra,Adsterra1} from "../AdScript"
import { useState } from "react";
const Page = () => {
const [file, setFile] = useState(null)
  return<>
    <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
    <HandleDragnDrop {...REMOVE_TOOL_PROPS} setUpperFile={setFile}  />
    {file && <FileConverter pdfUrl={URL.createObjectURL(file)} /> }
    <Adsterra1 slot={"1a26ef3314cb0fb63793eb96ad8c870c"} />
  </>
};

export default Page;
