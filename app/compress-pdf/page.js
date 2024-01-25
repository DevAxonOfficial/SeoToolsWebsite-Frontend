"use client";

import { COMPRESS_TOOL_PROPS } from "../utils/constants";
import HandleDragnDrop from "./../components/HandleDragnDrop";

const Page = () => {
  return (
    <>
      <HandleDragnDrop {...COMPRESS_TOOL_PROPS} />
    </>
  );
};

export default Page;
