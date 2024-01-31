"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { PNG_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...PNG_TOOL_PROPS} />;
  </>
);

export default Page;
