"use client";

import HandleDragnDrop from "../components/HandleDragnDrop";
import { WORD_TOOLS } from "../utils/constants";

const Page = () => {
  return (
    <>
      <HandleDragnDrop {...WORD_TOOLS} />
    </>
  );
};

export default Page;
