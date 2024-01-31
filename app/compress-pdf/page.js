"use client";

import { COMPRESS_TOOL_PROPS } from "../utils/constants";
import HandleDragnDrop from "./../components/HandleDragnDrop";
import AdScript from "../AdScript";
const Page = () => {
  return (
    <>
      <AdScript />
      <HandleDragnDrop {...COMPRESS_TOOL_PROPS} />;
    </>
  );
};

export default Page;
