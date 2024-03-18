"use client";
import { Adsterra, Adsterra1 } from "../AdScript";
import { COMPRESS_TOOL_PROPS } from "../utils/constants";
import HandleDragnDrop from "./../components/HandleDragnDrop";
import Content from "../utils/content";
const Page = () => {
  return (
    <>
      <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
      <HandleDragnDrop {...COMPRESS_TOOL_PROPS} />
      <Content {...COMPRESS_TOOL_PROPS} />
      <Adsterra1 slot={"1a26ef3314cb0fb63793eb96ad8c870c"} />
    </>
  );
};

export default Page;
