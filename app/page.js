import Ad2Container from "@/components/Ad2Container";
import AdContainer from "@/components/AdContainer";
import AddContainer from "@/components/AddContainer";
import Banner from "@/components/Banner";
import MainContainer from "@/components/MainContainer";
import SecondaryContainer from "@/components/SecondaryContainer";
import ThirdContainer from "@/components/ThirdContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainContainer />
      <AddContainer />
      <SecondaryContainer />
      <AdContainer />
      <ThirdContainer />
      <Ad2Container />
      <Banner />
    </main>
  );
}
