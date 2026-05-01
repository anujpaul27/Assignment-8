import LogoutButton from "@/app/(UI)/LogoutButton";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cache } from "react";

// Share Session Globally without context API
export const getServerSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
});

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  const { user } = session;

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="card bg-white shadow-xl border border-neutral-100 overflow-hidden">
          {/* Top Banner */}
          <div className="h-40 bg-gradient-to-r from-amber-600 to-amber-700 relative">
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <div className="avatar">
                <div className="w-28 h-28 rounded-full ring-4 ring-white shadow-lg overflow-hidden">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "Profile"}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-4xl font-bold text-neutral-500">
                      {user?.name?.charAt(0) || "U"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="card-body pt-16 pb-8 px-8 text-center">
            <h2 className="card-title text-3xl font-bold text-neutral-900 justify-center">
              {user?.name}
            </h2>
            <p className="text-neutral-500 mt-1">{user?.email}</p>

            <div className="divider my-6 text-black ">Account Information</div>

            {/* Info Cards */}
            <div className="space-y-4 w-full">
              <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-2xl flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Full Name
                </span>
                <span className="font-medium text-neutral-800">
                  {user.name}
                </span>
              </div>

              <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-2xl flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Email Address
                </span>
                <span className="font-medium text-neutral-800 break-all">
                  {user.email}
                </span>
              </div>

              <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-2xl flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Account Status
                </span>
                <div className="badge badge-success badge-md font-medium">
                  ACTIVE
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="card-actions flex flex-col gap-3 mt-10 w-full">
              <a
                href="/settings"
                className="btn btn-outline border-neutral-300 text-neutral-700 hover:bg-neutral-100 btn-block"
              >
                Edit Profile
              </a>

              <LogoutButton />
            </div>
          </div>
        </div>

        {/* Optional: Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
