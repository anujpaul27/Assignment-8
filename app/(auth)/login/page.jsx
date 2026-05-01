"use client";

// import { Check } from "@gravity-ui/icons";
import { useState } from "react";

export default function loginPage() {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};

    // Email Validation
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password Validation
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
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  const handleReset = () => {
    setErrors({});
  };

  return (
    <div className="w-full flex flex-col gap-10  justify-center items-center  ">
        <h1 className="lg:text-3xl text-xl lg:mt-30 mt-10   ">Login in your account</h1>
      <form className="flex w-96 flex-col gap-4 p-4" onSubmit={onSubmit}>
        {/* Email Field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="john@example.com"
            className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
            required
          />
          {errors.email && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.email}</span>
            </label>
          )}
        </div>

        {/* Password Field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
            required
          />
          <label className="label">
            <span className="label-text-alt text-gray-500">
              Must be at least 8 characters with 1 uppercase and 1 number
            </span>
          </label>
          {errors.password && (
            <label className="label pt-0">
              <span className="label-text-alt text-error">
                {errors.password}
              </span>
            </label>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="btn btn-primary flex items-center gap-2"
          >
            {/* <Check /> */}
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-ghost border-base-300"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
