import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/MyContexr";
import { toast } from "react-toastify";

const Register = () => {
  let { registeredUser, setRegisteredUser } = useContext(UserData);
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const submitHandle = (data) => {
    setRegisteredUser((prev) => [...prev, data]);
    toast.success("Account created Sucessfully");

    reset();
  };

  useEffect(() => {
    localStorage.setItem("added-users", JSON.stringify(registeredUser));
  }, [registeredUser]);

  return (
    <div className="h-full w-full text-white ">
      <div className="min-h-screen flex  items-center flex-col gap-10 justify-center bg-[#0d0d0d] px-4">
        <div className="flex items-center gap-3 font-[display1]">
          <div className="bg-[#C8F400] h-[40px] w-[40px] flex justify-center items-center rounded-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="black"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-zap text-ink fill-ink"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold">
            Sky<span className="text-[#C8F400]">Mart</span>
          </h1>
        </div>
        <div className="w-full max-w-md rounded-2xl border-[#1D1D1D] border-2 bg-[#111111] p-8 shadow-lg">
          <h2 className="mb-1 text-2xl font-bold text-white font-[display1]">
            Create account
          </h2>
          <p className="mb-6 text-sm text-[var(--grey-color)] font-bold font-[display2]">
            Join SkyMart and start shopping
          </p>

          <form onSubmit={handleSubmit(submitHandle)} className="space-y-4">
            {/* {errors.name && <p className='text-red-600'>{errors.name.message}</p>} */}

            <div>
              {/* Name Input */}
              <div className="flex relative gap-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                <input
                  type="name"
                  {...register("name", { required: "FullName is required" })}
                  placeholder="Full Name"
                  className="w-full rounded-2xl border bg-[#1E1E1E] border-[var(--grey-color))] px-10 py-3 outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400] font-[display2] text-sm"
                />
              </div>
            </div>
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}

            {/* Email input */}
            <div className="flex relative gap-8">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required.",
                
                })}
                placeholder="Email address"
                className="w-full rounded-2xl border bg-[#1E1E1E] border-[var(--grey-color))] px-10 py-3 outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400] font-[display2] text-sm"
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
            <div className="flex relative gap-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
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
                className="w-full rounded-2xl border bg-[#1E1E1E] border-[var(--grey-color))] px-10 py-3 outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400] font-[display2] text-sm"
              />
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            {/* Proper Password */}
            <div className="flex relative gap-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>

              <input
                type="password"
                {...register("password1", {
                  required: "password not match",
                  minLength: {
                    value: 6,
                    message: "Password not match",
                  },
                })}
                placeholder="confirm password"
                className="w-full rounded-2xl border bg-[#1E1E1E] border-[var(--grey-color))] px-10 py-3 outline-none transition focus:border-[#C8F400] focus:ring-1 focus:ring-[#C8F400] font-[display2] text-sm"
              />
            </div>
            {errors.password1 && (
              <p className="text-red-600">{errors.password1.message}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-2xl bg-[var(--secondary-color)] text-black py-3.5 font-semibold cursor-pointer transition flex items-center justify-center font-[display1]
            gap-2
            hover:bg-[#E2FF66]"
            >
              Create Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--grey-color)] font-medium font-[display2]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-medium text-[var(--secondary-color)]  cursor-pointer"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
