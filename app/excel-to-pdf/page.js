"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { EXCEL_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...EXCEL_TOOL_PROPS} />;
  </>
);

export default Page;
