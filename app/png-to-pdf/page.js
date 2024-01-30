"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { PNG_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return <HandleDragnDrop {...PNG_TOOL_PROPS} />;
};

export default Page;
