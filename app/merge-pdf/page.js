"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { MERGE_TOOLS } from "../utils/constants";

const Page = () => {
  return (
    <>
      <HandleDragnDrop {...MERGE_TOOLS} />
    </>
  );
};

export default Page;
