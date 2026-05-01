import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-white border-b sticky top-0 z-50 px-6 py-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-amber-600 rounded flex items-center justify-center text-white font-bold text-3xl shadow-md">
                            T
                        </div>
                        <div>
                            <span className="font-bold text-3xl tracking-tighter text-neutral-900">TILESY</span>
                            <p className="text-xs text-neutral-500 -mt-1 font-medium">FLOORING</p>
                        </div>
                    </div>
                </div>

                <div className="flex-none hidden lg:flex gap-10 text-sm font-medium text-neutral-700">
                    <Link href="/" className="hover:text-amber-600 transition-colors">
                        HOME
                    </Link>
                    <Link href="/shop" className="hover:text-amber-600 transition-colors">
                        All Tiles
                    </Link>
                    <Link href="/featured" className="hover:text-amber-600 transition-colors">
                        My Profile
                    </Link>
                    
                </div>


                <div className="flex-none flex items-center gap-5">
                    
                    <button  className="btn btn-success  ">
                        <Link href={'/login'}>Login</Link>
                    </button>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;