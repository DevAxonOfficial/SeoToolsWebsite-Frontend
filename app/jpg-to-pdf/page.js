"use client";
import {Adsterra,Adsterra2} from "../AdScript"
import HandleDragnDrop from "../components/HandleDragnDrop";
import { JPG_TOOL_PROPS } from "../utils/constants";
const Page = () => (
  <>
    <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
    <HandleDragnDrop {...JPG_TOOL_PROPS} />;
    <Adsterra2 slot={"bbd1e0f4c54c1cb2ae6f3aaabd762788"} />
  </>
);

export default Page;
