"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { PNG_TOOL_PROPS, adOptions1, scriptSrc1 } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript atOptions={adOptions1} scriptSrc={scriptSrc1} />
    <HandleDragnDrop {...PNG_TOOL_PROPS} />;
  </>
);

export default Page;
