import React, { useContext, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserData } from "../context/MyContexr";

const formatCurrency = (value) => `$${Number(value).toFixed(2)}`;

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    cartItems,
    cartItemsCount,
    cartSubtotal,
    removeFromCart,
    updateCartQuantity,
    clearCart,
  } = useContext(UserData);

  const shipping = cartItems.length > 0 ? 15 : 0;
  const tax = Number((cartSubtotal * 0.08).toFixed(2));
  const grandTotal = Number((cartSubtotal).toFixed(2));

  const closePath = useMemo(() => {
    const fromPath = location.state?.from;

    if (fromPath && fromPath !== "/dashboard/cart") {
      return fromPath;
    }

    return "/dashboard/shop";
  }, [location.state]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleRemove = (item) => {
    removeFromCart(item.id);
    toast.info(`${item.title} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.info("Cart cleared");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Close cart"
        onClick={() => navigate(closePath)}
        className="h-full flex-1 cursor-default bg-black/72 backdrop-blur-[3px]"
      />

      <aside className="flex h-full w-full max-w-[420px] flex-col border-l border-white/10 bg-[#141414] text-white shadow-[0_0_70px_rgba(0,0,0,0.55)]">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#53660E] bg-[#1D250C] text-[var(--secondary-color)]">
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
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <div>
              <h2 className="font-[display1] text-xl font-bold">Cart</h2>
              <p className="font-[display2] text-sm text-white/35">
                {cartItemsCount} item{cartItemsCount === 1 ? "" : "s"} in your bag
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate(closePath)}
            className="rounded-full p-2 text-white/45 transition-all hover:bg-white/5 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/5 text-white/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7.5 4.27 9 5.15"></path>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                <path d="m3.3 7 8.7 5 8.7-5"></path>
                <path d="M12 22V12"></path>
              </svg>
            </div>
            <h3 className="font-[display1] text-3xl font-bold">Cart is empty</h3>
            <p className="mt-3 max-w-[18rem] font-[display2] text-base text-white/35">
              Go shop something cool .
            </p>
            <button
              onClick={() => navigate("/dashboard/shop")}
              className="mt-8 rounded-2xl bg-[var(--secondary-color)] px-8 py-3 font-[display1] text-lg font-bold text-black transition-all hover:bg-[#dbff52]"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.6rem] border border-white/10 bg-[#181818] p-4"
                >
                  <div className="flex gap-4">
                    <div className="flex h-24 w-24 items-center justify-center rounded-[1.2rem] bg-[radial-gradient(circle_at_top,#ffffff_0%,#f3efe8_55%,#ece4d9_100%)] p-3">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          
                          <h3 className="mt-1 line-clamp-2 font-[display1] text-md font-bold text-white/90">
                            {item.title}
                          </h3>
                          {item.brand && (
                            <p className="mt-1 font-[display2] text-xs text-white/35">
                              {item.brand}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => handleRemove(item)}
                          className="rounded-full p-2 text-white/35 transition-all hover:bg-white/5 hover:text-red-400"
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
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4h8v2"></path>
                            <path d="M19 6l-1 14H6L5 6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                          </svg>
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-white/10 bg-black/30 px-2 py-1">
                          <button
                            onClick={() =>
                              updateCartQuantity(item.id, Math.max(1, item.quantity - 1))
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-white/75 transition-all hover:bg-white/6 hover:text-white"
                          >
                            -
                          </button>
                          <span className="min-w-10 text-center font-[display1] text-base font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateCartQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-white/75 transition-all hover:bg-white/6 hover:text-white"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-[display2] text-xs text-white/35">
                            {formatCurrency(item.price)} each
                          </p>
                          <h4 className="font-[display1] text-xl font-bold text-[var(--secondary-color)]">
                            {formatCurrency(item.price * item.quantity)}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 bg-[#151515] px-6 py-5">
             

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => navigate("/dashboard/shop")}
                  className="flex-1 rounded-2xl border border-white/12 bg-white/6 px-4 py-3 font-[display1] text-base font-semibold text-white transition-all hover:bg-white/10"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={handleClearCart}
                  className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-[display1] text-base font-semibold text-red-300 transition-all hover:bg-red-500/15"
                >
                  Clear
                </button>
              </div>

              <button className="mt-3 w-full rounded-2xl bg-[var(--secondary-color)] px-5 py-3 font-[display1] text-lg font-bold text-black transition-all hover:bg-[#dbff52]">
                Checkout {formatCurrency(grandTotal)}
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Cart;
