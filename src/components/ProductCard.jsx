import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserData } from "../context/MyContexr";

const ProductCard = ({ elem }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(UserData);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(elem);
    toast.success(`${elem.title} added to cart`);
  };

  return (
    <div
      onClick={() => {
        navigate(`/dashboard/shop/products/${elem.id}`);
      }}
      className="product-card w-full cursor-pointer overflow-hidden rounded-2xl border border-[#292929]"
    >
      <div className="relative flex h-[200px] w-full flex-col items-center justify-center bg-white p-5 text-black">
        <img
          src={elem.images?.[0] || elem.thumbnail}
          alt={elem.title}
          className="image-card h-[120px] object-cover object-center"
        />

        <p className="absolute top-3 left-3 rounded-2xl bg-[#666666] px-2.5 py-0.5 font-[display2] text-[10px] font-medium text-white/80">
          {elem.category}
        </p>
      </div>

      <div className="p-5">
        <p className="font-[display2] text-[12px] font-bold text-white/30">
          {elem.category}
        </p>
        <h1 className="mt-2 line-clamp-2 min-h-[42px] font-[display2] text-[14px] font-medium text-white/80">
          {elem.title}
        </h1>

        <div className="flex items-center gap-2 border-b py-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-amber-400 text-amber-400"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            ))}
          </div>
          <p className="font-[display2] text-[10px] text-[var(--grey-color)]">
            ({Math.max(18, Math.round((elem.stock || 0) * 1.4))})
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <h1 className="font-[display1] text-xl font-bold text-[var(--secondary-color)]">
            $ {elem.price}
          </h1>

          <button
            onClick={handleAddToCart}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[var(--secondary-color)] px-3 py-1 text-black hover:bg-[#E2FF66]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
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
            <h1 className="font-[display2] text-[12px] font-bold">Add</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
