import Banner from "./components/Banner";
import { Components } from "./components/MainContainer";

import ThirdContainer from "./components/ThirdContainer";

export default function Home() {
  return (
    <main>
      <Components />
      <ThirdContainer />
      <Banner />
    </main>
  );
}
