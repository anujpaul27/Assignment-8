"use client";

// import { Check } from "@gravity-ui/icons";
import { useState } from "react";

export default function LoginForm() {
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
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(data.password)) {
      newErrors.password = "Password must contain at least one number";
    }
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    alert(`Login successful for: ${data.username}`);
  };

  return (
    /* Force Light Theme here */
    <div data-theme="light" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <form className="flex w-80 flex-col gap-4" onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>

        {/* Username */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Username</span>
          </label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            className={`input input-bordered bg-white text-gray-800 ${errors.username ? "input-error" : "border-gray-300"}`}
          />
          {errors.username && (
            <label className="label">
              <span className="label-text-alt text-error font-medium">{errors.username}</span>
            </label>
          )}
        </div>

        {/* Email */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="john@example.com"
            className={`input input-bordered bg-white text-gray-800 ${errors.email ? "input-error" : "border-gray-300"}`}
          />
          {errors.email && (
            <label className="label">
              <span className="label-text-alt text-error font-medium">{errors.email}</span>
            </label>
          )}
        </div>

        {/* Password */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-gray-700">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className={`input input-bordered bg-white text-gray-800 ${errors.password ? "input-error" : "border-gray-300"}`}
          />
          <p className="text-[10px] text-gray-400 mt-1">Min 8 chars, 1 uppercase, 1 number</p>
          {errors.password && (
            <label className="label">
              <span className="label-text-alt text-error font-medium">{errors.password}</span>
            </label>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button type="submit" className="btn btn-primary flex-1 text-white border-none">
            {/* <Check className="w-4 h-4" /> */}
            Login
          </button>
          <button 
            type="reset" 
            className="btn btn-ghost bg-gray-100 text-gray-600 hover:bg-gray-200" 
            onClick={() => setErrors({})}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
