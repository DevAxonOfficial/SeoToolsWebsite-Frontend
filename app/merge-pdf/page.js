"use client";

import AdScript from "../AdScript";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { MERGE_TOOL_PROPS, adOptions3, scriptSrc3 } from "../utils/constants";

const Page = () => (
  <>
    <AdScript atOptions={adOptions3} scriptSrc={scriptSrc3} />
    <HandleDragnDrop {...MERGE_TOOL_PROPS} />;{" "}
  </>
);

export default Page;
