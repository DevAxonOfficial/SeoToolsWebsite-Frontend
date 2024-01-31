"use client";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { REMOVE_TOOL_PROPS } from "../utils/constants";
import AdScript from "../AdScript";
const Page = () => (
  <>
    <AdScript /> <HandleDragnDrop {...REMOVE_TOOL_PROPS} />;
  </>
);

export default Page;
