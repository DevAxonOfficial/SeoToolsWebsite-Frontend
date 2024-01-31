"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { HTML_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...HTML_TOOL_PROPS} />;
  </>
);

export default Page;
