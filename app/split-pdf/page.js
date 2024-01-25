"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { SPLIT_TOOLS } from "../utils/constants";
const Page = () => {
  return (
    <>
      <HandleDragnDrop {...SPLIT_TOOLS} />
    </>
  );
};

export default Page;
