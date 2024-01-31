"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { TXT_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...TXT_TOOL_PROPS} />;
  </>
);

export default Page;
