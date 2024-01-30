"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { WORD_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return <HandleDragnDrop {...WORD_TOOL_PROPS} />;
};

export default Page;
