"use client";

import { authClient } from "@/app/lib/auth-client";
import toast from "daisyui/components/toast";
import Link from "next/link";
// import { Check } from "@gravity-ui/icons";
import { useState } from "react";

export default function RegistrationPage() {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(data.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(data.password)) {
      newErrors.password = "Password must contain at least one number";
    }
    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const obj = Object.fromEntries(formData.entries());

    const validationErrors = validate(obj);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { data, error } = await authClient.signIn.email({
      email: obj.email,
      password: obj.password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login Successful!. ");
    }
  };

  const SignInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex justify-center  py-5 bg-white  ">
      <div className="bg-white p-8 shadow-lg border border-gray-100">
        <form className="flex w-80 flex-col gap-4" onSubmit={onSubmit}>
          <h2 className="text-2xl text-center  font-bold text-gray-800 mb-2">
            Login{" "}
          </h2>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Email
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className={`input input-bordered bg-white text-gray-800 ${errors.email ? "input-error" : "border-gray-300"}`}
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error font-medium">
                  {errors.email}
                </span>
              </label>
            )}
          </div>

          {/* Password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className={`input input-bordered bg-white text-gray-800 ${errors.password ? "input-error" : "border-gray-300"}`}
            />

            {errors.password && (
              <label className="label">
                <span className="label-text-alt text-error font-medium">
                  {errors.password}
                </span>
              </label>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              className="btn btn-primary flex-1 text-white border-none"
            >
              Login
            </button>
            <button
              type="reset"
              className="flex-1 btn btn-ghost bg-gray-100 text-gray-600 hover:bg-gray-200"
              onClick={() => setErrors({})}
            >
              Reset
            </button>
          </div>
        </form>

        {/* Login With Google Button */}
        <div className="flex justify-around ">
          <button
            onClick={SignInWithGoogle}
            className="btn my-2  bg-white mx-auto text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <button
            className="btn my-2  bg-white mx-auto text-black border-[#e5e5e5]"
          >
           
            <Link href={'/registration'}>Registration</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
