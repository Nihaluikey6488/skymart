import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center border-t-1">
      <div className="border-t border-white/8 px-4 py-8 text-center">
        <p className="mb-1 font-[display1] text-xl text-[var(--secondary-color)]">
          SkyMart
        </p>
        <p className="font-[display2] text-xs font-medium text-white/30">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>
    </div>
  );
};

export default Footer;
