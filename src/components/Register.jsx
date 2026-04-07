import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/MyContexr";
import { toast } from "react-toastify";

const Register = () => {
  const { registeredUser, setRegisteredUser } = useContext(UserData);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitHandle = (data) => {
    setRegisteredUser((prev) => [...prev, data]);
    toast.success("Account created Sucessfully");
    navigate("/dashboard")
    reset();
  };

  useEffect(() => {
    localStorage.setItem("added-users", JSON.stringify(registeredUser));
  }, [registeredUser]);

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] text-white">
      <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
        <div className="w-full max-w-md space-y-6 sm:space-y-8">
          <div className="flex items-center justify-center gap-3 font-[display1]">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl bg-[#C8F400]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="black"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap fill-ink text-ink"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">
              Sky<span className="text-[#C8F400]">Mart</span>
            </h1>
          </div>

          <div className="w-full rounded-2xl border-2 border-[#1D1D1D] bg-[#111111] p-6 shadow-lg sm:p-8">
            <h2 className="mb-1 font-[display1] text-2xl font-bold text-white">
              Create account
            </h2>
            <p className="mb-6 font-[display2] text-sm font-bold text-[var(--grey-color)]">
              Join SkyMart and start shopping
            </p>

            <form onSubmit={handleSubmit(submitHandle)} className="space-y-4">
              <div>
                <div className="relative flex gap-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user absolute top-1/2 left-3.5 -translate-y-1/2 text-white/25"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>

                  <input
                    type="text"
                    {...register("name", { required: "FullName is required" })}
                    placeholder="Full Name"
                    className="w-full rounded-2xl border bg-[#1E1E1E] px-10 py-3 text-sm font-[display2] outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400]"
                  />
                </div>
              </div>
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}

              <div className="relative flex gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail absolute top-1/2 left-3.5 -translate-y-1/2 text-white/25"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>

                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required.",
                  })}
                  placeholder="Email address"
                  className="w-full rounded-2xl border bg-[#1E1E1E] px-10 py-3 text-sm font-[display2] outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400]"
                />
              </div>
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}

              <div className="relative flex gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock absolute top-1/2 left-3.5 -translate-y-1/2 text-white/25"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>

                <input
                  type="password"
                  {...register("password", {
                    required: "minimum 6 length",
                    minLength: {
                      value: 6,
                      message: "Password minimum 6 chars",
                    },
                  })}
                  placeholder="Password(minimum 6 chars)"
                  className="w-full rounded-2xl border bg-[#1E1E1E] px-10 py-3 text-sm font-[display2] outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400]"
                />
              </div>
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}

              <div className="relative flex gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock absolute top-1/2 left-3.5 -translate-y-1/2 text-white/25"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>

                <input
                  type="password"
                  {...register("password1", {
                    required: "Confirm Password is Required",
                    validate: (value)=>
                      value=== getValues("password") || "Password do  not match"
                  })}
                  placeholder="confirm password"
                  className="w-full rounded-2xl border bg-[#1E1E1E] px-10 py-3 text-sm font-[display2] outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400]"
                />
              </div>
              {errors.password1 && (
                <p className="text-red-600">{errors.password1.message}</p>
              )}

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[var(--secondary-color)] py-3.5 font-[display1] font-semibold text-black transition hover:bg-[#E2FF66]"
              >
                Create Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>

            <p className="mt-6 text-center font-[display2] text-sm font-medium text-[var(--grey-color)]">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="cursor-pointer font-medium text-[var(--secondary-color)]"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
