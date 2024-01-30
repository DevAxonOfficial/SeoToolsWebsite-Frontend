"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { EXCEL_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return <HandleDragnDrop {...EXCEL_TOOL_PROPS} />;
};

export default Page;
