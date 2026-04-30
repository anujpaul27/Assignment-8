import Image from "next/image";
import Home from "./Component/Home";
import Collection from "./Component/Collection";
import BestSeller from "./Component/BestSeller";

export default function HomePage() {
  return (
    <div>
      <Home />
      <Collection/>
      <BestSeller/>
    </div>
  );
}
