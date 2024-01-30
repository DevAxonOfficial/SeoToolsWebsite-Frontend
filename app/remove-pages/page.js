"use client";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { REMOVE_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return <HandleDragnDrop {...REMOVE_TOOL_PROPS} />;
};

export default Page;
