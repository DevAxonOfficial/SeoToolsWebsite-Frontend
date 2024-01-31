"use client";

import AdScript from "../AdScript";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { CSV_TOOL_PROPS } from "../utils/constants";

const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...CSV_TOOL_PROPS} />;
  </>
);

export default Page;
