import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/MyContexr";
import { toast } from "react-toastify";

const Login = () => {
  const { registeredUser, setLoggedUser } = useContext(UserData);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitHandle = (data) => {
    const user = registeredUser.find((elem) => {
      return elem.email === data.email && elem.password === data.password;
    });

    if (!user) {
      toast.error("account not found");
      reset();
      return;
    }

    localStorage.setItem("current-user", JSON.stringify(user));
    setLoggedUser(user);
    toast.success("Logged in Successfully");
    navigate("/dashboard");
    reset();
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="border-b border-white/10 px-5 py-8 sm:px-8 sm:py-10 lg:border-r lg:border-b-0 xl:px-12 xl:py-12">
          <div className="mx-auto flex h-full max-w-xl flex-col justify-center">
            <div className="flex items-center gap-3 font-[display1]">
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

            <div className="mt-10 sm:mt-14 lg:mt-24">
              <h1 className="font-[display2] text-[0.82rem] font-semibold uppercase tracking-wider text-[var(--secondary-color)] sm:text-[0.9rem]">
                Welcome Back
              </h1>
              <h1 className="mt-4 font-[display1] text-3xl font-bold sm:text-4xl xl:mt-5 xl:text-5xl">
                Shop the future.
              </h1>
              <h1 className="mt-2 font-[display1] text-3xl font-bold text-[var(--secondary-color)] sm:text-4xl xl:mt-3 xl:text-5xl">
                Today.
              </h1>
              <p className="mt-5 max-w-lg font-[display2] text-sm leading-7 font-medium text-[var(--grey-color)] sm:mt-7 sm:text-base">
                Thousands of products, lightning-fast delivery, and prices that
                make your wallet happy.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
              <div className="flex h-20 flex-col items-center justify-center rounded-xl border border-white/10">
                <h1 className="text-xl font-bold text-[var(--secondary-color)] font-[display1]">
                  20K+
                </h1>
                <p className="font-[display2] text-[0.8rem] font-bold text-[var(--grey-color)]">
                  Products
                </p>
              </div>
              <div className="flex h-20 flex-col items-center justify-center rounded-xl border border-white/10">
                <h1 className="text-xl font-bold text-[var(--secondary-color)] font-[display1]">
                  50K+
                </h1>
                <p className="font-[display2] text-[0.8rem] font-bold text-[var(--grey-color)]">
                  Users
                </p>
              </div>
              <div className="flex h-20 flex-col items-center justify-center rounded-xl border border-white/10">
                <h1 className="text-xl font-bold text-[var(--secondary-color)] font-[display1]">
                  4.9<i className="ri-star-s-fill" />
                </h1>
                <p className="font-[display2] text-[0.8rem] font-bold text-[var(--grey-color)]">
                  Rating
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[52vh] items-center justify-center bg-[#0d0d0d] px-4 py-8 sm:px-6 lg:min-h-screen lg:px-8">
          <div className="w-full max-w-md rounded-2xl border-2 border-[#1D1D1D] bg-[#111111] p-6 shadow-lg sm:p-8">
            <h2 className="mb-1 font-[display1] text-2xl font-bold text-white">
              Sign In
            </h2>
            <p className="mb-6 font-[display2] text-sm font-bold text-[var(--grey-color)]">
              Enter your credentials to continue
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
                    className="lucide lucide-mail absolute top-1/2 left-3.5 -translate-y-1/2 text-white/25"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>

                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email address"
                    className="w-full rounded-2xl border bg-[#1E1E1E] px-10 py-3 text-sm font-[display2] outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400]"
                  />
                </div>
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
                    required: "minimun 6 chars",
                    minLength: {
                      value: 6,
                      message: "Password should be 6 more than chars",
                    },
                  })}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border bg-[#1E1E1E] px-10 py-3 text-sm font-[display2] outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400]"
                />
              </div>
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[var(--secondary-color)] py-3 font-[display1] font-semibold text-black transition hover:bg-[#E2FF66]"
              >
                Sign in
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
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="cursor-pointer font-medium text-[var(--secondary-color)]"
              >
                Create one
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
