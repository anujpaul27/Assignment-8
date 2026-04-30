import Image from 'next/image';
import React from 'react';

const BestSeller = () => {
    return (
        <div>
            {/* Our Best Sellers Section */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-2">OUR BEST SELLER</h2>

                        <div className="flex justify-center gap-3 mt-6">
                            <button className="btn btn-sm bg-amber-700 hover:bg-amber-800 text-white border-none px-6">
                                NEW ARRIVALS
                            </button>
                            <button className="btn btn-sm btn-outline border-neutral-300 text-neutral-700 hover:bg-neutral-100 px-6">
                                NEW ARRIVALS
                            </button>
                            <button className="btn btn-sm btn-outline border-neutral-300 text-neutral-700 hover:bg-neutral-100 px-6">
                                NEW ARRIVALS
                            </button>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Product Card 1 */}
                        <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <div className="relative h-64 bg-neutral-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1618221195710-dd5b3a2e7d5f?w=600"
                                    alt="Zurich Vision 60x60"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-r-md">35%</span>
                                </div>
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="font-medium text-neutral-900 mb-1">Zurich Vision 60x60</h3>
                                <p className="text-neutral-500 text-sm mb-2">60x60 cm</p>
                                <div className="flex items-center justify-center gap-2 text-sm">
                                    <span className="line-through text-neutral-400">$100.00</span>
                                    <span className="font-semibold text-emerald-600">$75.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <div className="relative h-64 bg-neutral-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1600210491892-03d54c0e1c9f?w=600"
                                    alt="Zurich Pearl 60x60"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="font-medium text-neutral-900 mb-1">Zurich Pearl 60x60</h3>
                                <p className="text-neutral-500 text-sm mb-2">60x60 cm</p>
                                <div className="text-sm font-semibold text-emerald-600">$50.00</div>
                            </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <div className="relative h-64 bg-neutral-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600"
                                    alt="Zurich Grey 60x60"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="font-medium text-neutral-900 mb-1">Zurich Grey 60x60</h3>
                                <p className="text-neutral-500 text-sm mb-2">60x60 cm</p>
                                <div className="text-sm font-semibold text-emerald-600">$215.00</div>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <div className="relative h-64 bg-neutral-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a9c?w=600"
                                    alt="Zurich Dark Grey 60x60"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-r-md">-4%</span>
                                </div>
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="font-medium text-neutral-900 mb-1">Zurich Dark Grey 60x60</h3>
                                <p className="text-neutral-500 text-sm mb-2">60x60 cm</p>
                                <div className="flex items-center justify-center gap-2 text-sm">
                                    <span className="line-through text-neutral-400">$296.00</span>
                                    <span className="font-semibold text-emerald-600">$255.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Second Row - You can add more cards similarly */}
                        {/* Windsor White Oak */}
                        <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <div className="relative h-64 bg-neutral-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600"
                                    alt="Windsor White Oak"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="font-medium text-neutral-900 mb-1">Windsor White Oak</h3>
                                <p className="text-neutral-500 text-sm mb-2">Brick Style</p>
                                <div className="text-sm font-semibold text-emerald-600">$100.00</div>
                            </div>
                        </div>

                        {/* Add remaining 3 cards similarly... */}

                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <button className="btn btn-outline border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-900 hover:text-white px-10 py-3 text-base font-medium">
                            VIEW ALL BEST SELLERS
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BestSeller;