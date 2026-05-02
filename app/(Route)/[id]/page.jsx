import Image from "next/image";
import React from "react";

const DetailsPage = async ({ params }) => {
  // Fetch data from database
  // const res = await fetch("http://localhost:3001/allTiles");
  // const data = await res.json();
  const data = [
    {
      id: "tile_001",
      title: "Ceramic Blue Tile",
      description: "Premium ceramic tile with blue glaze finish",
      image:
        "https://media.istockphoto.com/id/1221207640/photo/background-millennial-pink-pale-mermaid-pattern-pastel-texture-abstract-fish-dragon-reptile.jpg?s=612x612&w=0&k=20&c=wXLDaLCybT4YxLn4SqVi_mZXyEZ0-TDfGwItMek8eWU=",
      category: "ceramic",
      price: 45.99,
      currency: "USD",
      dimensions: "60x60 cm",
      material: "Ceramic",
      inStock: true,
    },
  ];

  // Accept id from params
  const { id } = await params;

  // Filter Specific tile from data with params id
  const product1 = data.filter((pro) => pro.id === id);
  const product = product1[0];

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side  */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="aspect-square   rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
                <Image
                  src={product?.image}
                  alt={product?.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right - Details of the tile  */}
          <div className="space-y-8">
            <div>
              <div className="uppercase tracking-widest text-amber-600 text-sm font-medium mb-2">
                {product?.category.toUpperCase()}
              </div>
              <h1 className="text-4xl font-bold text-neutral-900 leading-tight">
                {product?.title}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-semibold text-neutral-900">
                ${product?.price}
              </span>
              <span className="text-neutral-500">/ per tile</span>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed">
              {product?.description}
            </p>

            {/* Specifications tile details  */}
            <div className="grid grid-cols-2 gap-6 bg-white p-8 rounded-3xl border border-neutral-100">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-600 mb-1">
                  Dimensions
                </p>
                <p className="font-sm  text-gray-600 ">{product?.dimensions}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-600 mb-1">
                  Material
                </p>
                <p className="font-sm  text-gray-600 ">{product?.material}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
