"use client";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { REMOVE_TOOLS } from "../utils/constants";

const Page = () => {
  return (
    <>
      <HandleDragnDrop {...REMOVE_TOOLS} />
    </>
  );
};

export default Page;
