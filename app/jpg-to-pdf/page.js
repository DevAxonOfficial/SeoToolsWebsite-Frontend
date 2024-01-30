"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { JPG_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return <HandleDragnDrop {...JPG_TOOL_PROPS} />;
};

export default Page;
