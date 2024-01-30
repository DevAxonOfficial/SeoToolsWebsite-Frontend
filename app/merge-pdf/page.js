"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { MERGE_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return <HandleDragnDrop {...MERGE_TOOL_PROPS} />;
};

export default Page;
