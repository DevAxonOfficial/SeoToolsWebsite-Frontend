"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { PSD_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...PSD_TOOL_PROPS} />;
  </>
);

export default Page;
