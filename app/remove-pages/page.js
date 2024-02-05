"use client";
import HandleDragnDrop from "../components/HandleDragnDrop";
import { REMOVE_TOOL_PROPS } from "../utils/constants";
import {Adsterra,Adsterra1} from "../AdScript"
const Page = () => (
  <>
    <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
    <HandleDragnDrop {...REMOVE_TOOL_PROPS} />;
    <Adsterra1 slot={"1a26ef3314cb0fb63793eb96ad8c870c"} />
  </>
);

export default Page;
