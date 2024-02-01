"use client";

import {
  COMPRESS_TOOL_PROPS,
  adOptions1,
  scriptSrc1,
} from "../utils/constants";
import HandleDragnDrop from "./../components/HandleDragnDrop";
import AdScript from "../AdScript";
const Page = () => {
  return (
    <>
      <AdScript atOptions={adOptions1} scriptSrc={scriptSrc1} />
      <HandleDragnDrop {...COMPRESS_TOOL_PROPS} />;
    </>
  );
};

export default Page;
