"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { TXT_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return (
    <>
      <HandleDragnDrop {...TXT_TOOL_PROPS} />
    </>
  );
};

export default Page;
