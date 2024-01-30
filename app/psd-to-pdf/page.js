"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { PSD_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return <HandleDragnDrop {...PSD_TOOL_PROPS} />;
};

export default Page;
