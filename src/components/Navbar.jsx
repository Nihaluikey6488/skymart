import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserData } from "../context/MyContexr";

const Navbar = () => {
  const { loggedUser, setLoggedUser, cartItemsCount } = useContext(UserData);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userName = loggedUser?.name || loggedUser?.fullname || "nihal uikey";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("current-user");
    setLoggedUser(null);
  };

  return (
    <div className="fixed top-0 left-0 z-40 flex h-16 w-full items-center justify-between border-b border-white/8 bg-[#111111]/95 px-10 text-white shadow-2xl backdrop-blur md:px-20 xl:px-38">
      <div className="flex items-center gap-2 font-[display1]">
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-xl bg-[#C8F400]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
        </div>
        <h1 className="text-[18px] font-bold">
          Sky<span className="text-[#C8F400]">Mart</span>
        </h1>
      </div>

      <div className="flex gap-7 text-sm">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${isActive && pathname === "/dashboard" ? "text-[#C8F400]" : "text-[#aaaaaa]"} font-medium`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard/shop"
          className={({ isActive }) =>
            `${isActive ? "text-[#C8F400]" : "text-[#aaaaaa]"} font-medium`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/dashboard/about"
          className={({ isActive }) =>
            `${isActive ? "text-[#C8F400]" : "text-[#aaaaaa]"} font-medium`
          }
        >
          About
        </NavLink>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-xl border border-[#2f2f2f] bg-[#191919] px-3 py-1.5 md:flex">
          <div className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-[var(--secondary-color)]">
            <h1 className="text-xs font-medium text-black">{userInitial}</h1>
          </div>
          <h1 className="text-[14px] font-medium text-[#aaaaaa]">{userName}</h1>
        </div>

        <button
          onClick={() =>
            navigate("/dashboard/cart", {
              state: { from: pathname },
            })
          }
          className="relative flex items-center gap-2 rounded-xl border border-[#2f2f2f] bg-[#191919] px-2.5 py-2 transition-all cursor-pointer hover:border-white/25"
        >
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
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
          {cartItemsCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--secondary-color)] px-1 text-[10px] font-bold text-black">
              {cartItemsCount}
            </span>
          )}
        </button>

        <button
          onClick={handleLogout}
          className="cursor-pointer flex items-center gap-2 rounded-xl border border-[#2f2f2f] bg-white/8 px-2.5 py-2 text-white/60 transition-all hover:border-red-500/30 hover:bg-red-500/20 hover:text-red-400 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" x2="9" y1="12" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
