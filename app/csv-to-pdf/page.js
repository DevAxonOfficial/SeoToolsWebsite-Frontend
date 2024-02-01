"use client";

import AdScript from "../AdScript";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { CSV_TOOL_PROPS, adOptions2, scriptSrc2 } from "../utils/constants";

const Page = () => (
  <>
    <AdScript atOptions={adOptions2} scriptSrc={scriptSrc2} />
    <HandleDragnDrop {...CSV_TOOL_PROPS} />;
  </>
);

export default Page;
