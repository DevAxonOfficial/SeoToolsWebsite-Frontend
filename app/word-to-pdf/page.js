"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { WORD_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...WORD_TOOL_PROPS} />;
  </>
);

export default Page;
