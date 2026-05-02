import Image from "next/image";
import tiles from "@/public/Tiles/tiles2.jpg";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image from Unsplash */}
        <Image
          src={tiles}
          alt="Modern kitchen with grey wall tiles"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Dark Overlay best image output */}
        <div className="absolute inset-0 bg-black/45  " />

        {/* Text of the hero */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-white">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              ALL WALL TILES
            </h1>

             

            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary btn-lg text-base px-10 rounded-none font-medium">
                <Link href={'/alltiles'}>BROWSE NOW</Link>
              </button>

              <Marquee pauseOnHover={true}>
                New Arrivals: Slate Grey Stone Tile | Weekly Feature: Modern Geometric Patterns | Join the Community..
              </Marquee>
            </div>

            {/* Trust line */}
            <div className="mt-16 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-white/70" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-white/70" />
                <span>Free Design Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
