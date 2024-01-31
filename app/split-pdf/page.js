"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { SPLIT_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...SPLIT_TOOL_PROPS} />;
  </>
);

export default Page;
