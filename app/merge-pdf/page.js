"use client";

import AdScript from "../AdScript";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { MERGE_TOOL_PROPS } from "../utils/constants";

const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...MERGE_TOOL_PROPS} />;{" "}
  </>
);

export default Page;
