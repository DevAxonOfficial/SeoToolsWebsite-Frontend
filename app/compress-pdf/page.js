"use client";

import { COMPRESS_TOOLS } from "../utils/constants";
import HandleDragnDrop from "./../components/HandleDragnDrop";

const Page = () => {
  return (
    <>
      <HandleDragnDrop {...COMPRESS_TOOLS} />
    </>
  );
};

export default Page;
