import Home from "./Component/Home";
import Collection from "./Component/Collection";
import TileFeature from "./(Route)/TileFeature/page";
import ContactUs from "./Component/Contract";

export default function HomePage() {
  return (
    <div>
      <Home />
      <TileFeature> </TileFeature>
      <ContactUs />
    </div>
  );
}
