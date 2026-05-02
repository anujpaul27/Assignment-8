import Image from "next/image";
import Link from "next/link";

const AllTiles = async () => {
  // Fetch data from database
  const res = await fetch("http://localhost:3001/allTiles");
  const data = await res.json();

  return (
    <div>
      <section className="py-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            {/* Heading Title   */}
            <h2 className="text-4xl font-bold text-neutral-900 mb-2">
              ALL TILES
            </h2> 
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.map((tile) => (
              <div
                key={tile?.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64 bg-neutral-100">
                  <Image
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    src={tile?.image}
                    alt="Zurich Vision 60x60"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-r-md">
                      9%
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-medium text-neutral-900 mb-1">
                    {tile?.title}
                  </h3>

                  <div className="flex items-center justify-center my-2  gap-2 text-sm">
                    <span className="text-lg  text-black  ">Price:</span>
                    <span className="font-semibold text-emerald-600 text-lg  ">
                      ${(tile?.price - (tile?.price * 9) / 100).toFixed(2)}
                    </span>
                    <span className="line-through text-neutral-400   ">
                      {tile?.price}
                    </span>
                  </div>
                  <span className="btn btn-success ">
                    {" "}
                    <Link href={`/${tile.id}`}>View Details</Link>{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTiles;
