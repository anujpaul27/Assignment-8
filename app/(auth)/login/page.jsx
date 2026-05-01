"use client";

import { authClient } from "@/app/lib/auth-client";
import toast from "daisyui/components/toast";
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
      </div>
    </div>
  );
}
