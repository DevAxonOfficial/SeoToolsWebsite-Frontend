"use client";
import { Adsterra, Adsterra2 } from "../AdScript";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { EXCEL_TOOL_PROPS } from "../utils/constants";
import Content from "../utils/content";
const Page = () => (
  <>
    <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
    <HandleDragnDrop {...EXCEL_TOOL_PROPS} />;
    <Content {...EXCEL_TOOL_PROPS} />
    <Adsterra2 slot={"bbd1e0f4c54c1cb2ae6f3aaabd762788"} />
  </>
);

export default Page;
