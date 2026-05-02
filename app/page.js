import Home from "./Component/Home";
import Collection from "./Component/Collection";
import TileFeature from "./(Route)/TileFeature/page";

export default function HomePage() {
  return (
    <div>
      <Home />
      <TileFeature> </TileFeature>
      <Collection/>
    </div>
  );
}
