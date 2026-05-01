import Link from "next/link";
import { getServerSession } from "../(auth)/myprofile/page";
import LogoutButton from "../(UI)/LogoutButton";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <nav className="navbar bg-white border-b sticky top-0 z-50 px-4 md:px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-3xl shadow-md">
            T
          </div>
          <div>
            <span className="font-bold text-3xl tracking-tighter text-neutral-900">
              TILESY
            </span>
            <p className="text-xs text-neutral-500 -mt-1 font-medium tracking-widest">
              FLOORING
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className=" lg:flex items-center gap-10 text-sm font-medium text-neutral-700">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            HOME
          </Link>
          <Link href="/alltiles" className="hover:text-amber-600 transition-colors">
            ALL TILES
          </Link>
          {session && (
            <Link
              href="/myprofile"
              className="hover:text-amber-600 transition-colors"
            >
              MY PROFILE
            </Link>
          )}
        </div>

        {/* Right Side - Auth + Icons */}
        <div className="flex items-center gap-4">
          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {session ? (
              <div className="flex items-center gap-3">
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="btn btn-primary btn-sm md:btn-md px-6 rounded-lg font-medium"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <label htmlFor="mobile-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
