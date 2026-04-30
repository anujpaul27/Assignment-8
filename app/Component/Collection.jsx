import Image from 'next/image';
import React from 'react';
import tiles1 from '@/public/Tiles/tiles1.jpg'
import tiles2 from '@/public/Tiles/tiles2.jpg'
import tiles3 from '@/public/Tiles/tiles3.jpg'
import tiles4 from '@/public/Tiles/tiles4.jpg'

const Collection = () => {
    return (
        <div>
            {/* Collections Section */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-3">
                            Our Popular Collections
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            Discover our premium tile collections designed to bring elegance and modern aesthetics to your space.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1 - Trazos Range */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-xl shadow-sm border border-neutral-100 h-[320px]">
                                <Image
                                    src={tiles1}
                                    alt="Trazos Range"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Trazos Range</h3>
                                <p className="text-neutral-600 leading-relaxed text-[15px]">
                                    A collection that replicates the natural shine of marble and responds to current
                                    aesthetic trends in interior design.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 - Parchment */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-xl shadow-sm border border-neutral-100 h-[320px]">
                                <Image
                                    src={tiles2}
                                    alt="Parchment"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Parchment</h3>
                                <p className="text-neutral-600 leading-relaxed text-[15px]">
                                    A collection that replicates the natural shine of marble and responds to current
                                    aesthetic trends in interior design.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 - Wallpaper */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-xl shadow-sm border border-neutral-100 h-[320px]">
                                <Image
                                    src={tiles3}
                                    alt="Wallpaper"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Wallpaper</h3>
                                <p className="text-neutral-600 leading-relaxed text-[15px]">
                                    A collection that replicates the natural shine of marble and responds to current
                                    aesthetic trends in interior design.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 - Valentina */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-xl shadow-sm border border-neutral-100 h-[320px]">
                                <Image
                                    src={tiles4}
                                    alt="Valentina"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Valentina</h3>
                                <p className="text-neutral-600 leading-relaxed text-[15px]">
                                    A collection that replicates the natural shine of marble and responds to current
                                    aesthetic trends in interior design.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Collection;