"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { TXT_TOOL_PROPS, adOptions3, scriptSrc3 } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript atOptions={adOptions3} scriptSrc={scriptSrc3} />
    <HandleDragnDrop {...TXT_TOOL_PROPS} />;
  </>
);

export default Page;
