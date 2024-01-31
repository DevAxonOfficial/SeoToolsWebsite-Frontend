"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { PPT_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...PPT_TOOL_PROPS} />;
  </>
);

export default Page;
