"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { SPLIT_TOOL_PROPS } from "../utils/constants";
const Page = () => {
  return (
    <>
      <HandleDragnDrop {...SPLIT_TOOL_PROPS} />
    </>
  );
};

export default Page;
