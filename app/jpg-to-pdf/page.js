"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { JPG_TOOL_PROPS, adOptions2, scriptSrc2 } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript atOptions={adOptions2} scriptSrc={scriptSrc2} />
    <HandleDragnDrop {...JPG_TOOL_PROPS} />;
  </>
);

export default Page;
