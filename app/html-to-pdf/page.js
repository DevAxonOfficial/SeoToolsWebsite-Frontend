"use client";
import { Adsterra, Adsterra1 } from "../AdScript";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { HTML_TOOL_PROPS } from "../utils/constants";
import Content from "../utils/content";
const Page = () => (
  <>
    <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
    <HandleDragnDrop {...HTML_TOOL_PROPS} />
    <Content {...HTML_TOOL_PROPS} />
    <Adsterra1 slot={"1a26ef3314cb0fb63793eb96ad8c870c"} />
  </>
);

export default Page;
