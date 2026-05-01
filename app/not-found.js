import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div class="hero min-h-screen  bg-base-100 ">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-9xl font-bold text-primary  ">404</h1>
            <p class="py-6 text-2xl font-semibold  text-black    ">Oops! Page not found.</p>
            <p class="pb-6 text-black">
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </p>
            <Link href="/" class="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
