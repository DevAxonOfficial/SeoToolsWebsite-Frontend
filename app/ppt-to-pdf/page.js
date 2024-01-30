"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { PPT_TOOL_PROPS } from "../utils/constants";

const Page = () => {
  return <HandleDragnDrop {...PPT_TOOL_PROPS} />;
};

export default Page;
