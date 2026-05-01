"use client";

import { authClient } from "@/app/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
import { useState } from "react";
import { toast } from "sonner";

export default function RegistrationPage() {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (!data.username || data.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
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

    const { data, error } = await authClient.signUp.email({
      name: obj.username,
      email: obj.email,
      password: obj.password,
      image: obj.imageURL,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`${obj.username} Your Registration Successful!. `);
    }

  };

  return (
    <div className="flex justify-center  py-5 bg-white  ">
      <div className="bg-white p-8 shadow-lg border border-gray-100">
        <form className="flex w-80 flex-col gap-4" onSubmit={onSubmit}>
          <h2 className="text-2xl text-center  font-bold text-gray-800 mb-2">
            Registration{" "}
          </h2>

          {/* Username */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Username
              </span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="johndoe"
              className={`input input-bordered bg-white text-gray-800 ${errors.username ? "input-error" : "border-gray-300"}`}
            />
            {errors.username && (
              <label className="label">
                <span className="label-text-alt text-error font-medium">
                  {errors.username}
                </span>
              </label>
            )}
          </div>

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
            <p className="text-[10px] text-gray-400 mt-1">
              Min 8 chars, 1 uppercase, 1 number
            </p>
            {errors.password && (
              <label className="label">
                <span className="label-text-alt text-error font-medium">
                  {errors.password}
                </span>
              </label>
            )}
          </div>
        
          {/* Image URL */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Enter Your ImageURL
              </span>
            </label>
            <input
              name="imageURL"
              type="text"
              placeholder="Image URL"
              className={`input input-bordered bg-white text-gray-800 border-gray-300}`}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              className="btn btn-primary flex-1 text-white border-none"
            >
              Submit
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}
