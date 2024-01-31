"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { JPG_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...JPG_TOOL_PROPS} />;
  </>
);

export default Page;
