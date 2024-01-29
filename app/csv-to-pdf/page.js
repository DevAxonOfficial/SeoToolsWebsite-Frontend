"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { CSV_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return (
    <>
      <HandleDragnDrop {...CSV_TOOL_PROPS} />
    </>
  );
};

export default Page;
