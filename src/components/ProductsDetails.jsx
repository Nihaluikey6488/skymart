import React, { useContext, useMemo, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { UserData } from "../context/MyContexr";
import { toast } from "react-toastify";

const featureCards = [
  {
    title: "Free Delivery",
    subtitle: "On orders above $50",
    icon: (
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
        <rect x="1" y="3" width="15" height="13" rx="2"></rect>
        <path d="M16 8h4l3 3v5h-7"></path>
        <circle cx="5.5" cy="18.5" r="1.5"></circle>
        <circle cx="18.5" cy="18.5" r="1.5"></circle>
      </svg>
    ),
  },
  {
    title: "Secure Pay",
    subtitle: "256-bit SSL",
    icon: (
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
        <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    subtitle: "30-day policy",
    icon: (
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
        <path d="M3 2v6h6"></path>
        <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path>
        <path d="M21 22v-6h-6"></path>
        <path d="M3 12a9 9 0 0 0 15 6.7L21 16"></path>
      </svg>
    ),
  },
];

const ProductsDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, allProducts = [] } = useLoaderData();
  const { addToCart } = useContext(UserData);
  const [activeImage, setActiveImage] = useState(product?.images?.[0] || "");

  const safeProducts = Array.isArray(allProducts) ? allProducts : [];

  const currentIndex = safeProducts.findIndex((item) => item.id === product.id);
  const previousProduct =
    currentIndex > 0 ? safeProducts[currentIndex - 1] : null;
  const nextProduct =
    currentIndex >= 0 && currentIndex < safeProducts.length - 1
      ? safeProducts[currentIndex + 1]
      : null;

  const relatedProducts = useMemo(() => {
    const sameCategory = safeProducts.filter(
      (item) => item.id !== product.id && item.category === product.category,
    );

    if (sameCategory.length >= 4) {
      return sameCategory.slice(0, 4);
    }

    const nearbyProducts = safeProducts.filter(
      (item) => item.id !== product.id,
    );
    const merged = [...sameCategory];

    for (const item of nearbyProducts) {
      if (!merged.some((existing) => existing.id === item.id)) {
        merged.push(item);
      }

      if (merged.length === 4) {
        break;
      }
    }

    return merged;
  }, [product.category, product.id, safeProducts]);

  const discountPrice = product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  const reviewCount = Math.max(18, Math.round((product.stock || 0) * 1.5));
  const images = product.images?.length ? product.images : [product.thumbnail];

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className="px-0 pt-22 pb-12 text-white sm:pt-24 sm:pb-16">
      <button
        onClick={() => navigate("/dashboard/shop")}
        className="mb-6 flex flex-wrap items-center gap-2 text-sm font-[display2] text-white/45 transition-all hover:text-white sm:mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span>Products</span>
        <span>/</span>
        <span className="text-white/70">{product.category}</span>
        <span>/</span>
        <span className="truncate text-white">{product.title}</span>
      </button>

      <section className="grid gap-8 xl:grid-cols-[1.05fr_1fr] xl:gap-10">
        <div className="space-y-5">
          <div className="rounded-[2rem] border border-white/8 bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:p-6 lg:p-8">
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#f4f1eb] sm:min-h-[420px] lg:min-h-[520px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#f6f2ec_42%,#ede7dc_100%)]"></div>
              <img
                src={activeImage || product.thumbnail}
                alt={product.title}
                className="relative z-10 max-h-[240px] w-full object-contain px-4 sm:max-h-[320px] sm:px-6 lg:max-h-[420px] lg:px-8"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {images.slice(0, 4).map((image, index) => (
              <button
                key={`${image}-${index}`}
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded-2xl border p-2 transition-all ${
                  activeImage === image
                    ? "border-[var(--secondary-color)] bg-[#1a1a1a]"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <div className="flex h-24 items-center justify-center rounded-xl bg-white">
                  <img src={image} alt={`${product.title} ${index + 1}`} className="h-20 w-full object-contain" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-0 xl:pt-4">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#44510C] bg-[#23280F] px-4 py-1 text-xs font-bold font-[display2] text-[var(--secondary-color)]">
              {product.category}
            </span>
            {product.brand && (
              <span className="rounded-full border border-white/12 bg-white/5 px-4 py-1 text-xs font-medium font-[display2] text-white/55">
                {product.brand}
              </span>
            )}
          </div>

          <h1 className="max-w-[14ch] font-[display1] text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            {product.title}
          </h1>

          <div className="mt-5 flex items-center gap-3 text-sm font-[display2] text-white/65">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              ))}
            </div>
            <span className="text-base font-semibold text-white/85">
              {Number(product.rating || 0).toFixed(1)}
            </span>
            <span>({reviewCount} reviews)</span>
          </div>

          <div className="mt-7 border-y border-white/12 py-7">
            <div className="flex items-end gap-4">
              <h2 className="font-[display1] text-4xl font-bold text-[var(--secondary-color)]">
                ${product.price}
              </h2>
              {discountPrice && (
                <div className="pb-1 font-[display2] text-sm text-white/35">
                  <span className="line-through">${discountPrice}</span>
                  <span className="ml-2 text-[var(--secondary-color)]">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                </div>
              )}
            </div>

            <p className="mt-6 max-w-2xl font-[display2] text-base leading-7 text-white/58">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 font-[display2] text-sm text-white/55">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Stock: <span className="text-white/85">{product.stock}</span>
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                SKU:{" "}
                <span className="text-white/85">
                  SM-{product.id.toString().padStart(4, "0")}
                </span>
              </span>
              {product.returnPolicy && (
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {product.returnPolicy}
                </span>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="flex min-h-14 w-full flex-1 items-center justify-center gap-3 rounded-2xl bg-[var(--secondary-color)] px-6 text-lg font-bold font-[display1] text-black transition-all hover:bg-[#dfff52] sm:min-w-[320px] sm:px-8"
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
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              Add to Cart
            </button>
            <button
              onClick={() =>
                navigate("/dashboard/cart", {
                  state: { from: location.pathname },
                })
              }
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/25 hover:text-white"
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
                <path d="m12 21-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18z"></path>
              </svg>
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.4rem] border border-white/12 bg-[#121212] p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#20290B] text-[var(--secondary-color)]">
                  {card.icon}
                </div>
                <h3 className="font-[display1] text-[15px] font-bold">
                  {card.title}
                </h3>
                <p className="mt-1 font-[display2] text-xs text-white/35">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <button
              disabled={!previousProduct}
              onClick={() =>
                previousProduct &&
                navigate(`/dashboard/shop/products/${previousProduct.id}`)
              }
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-[display1] text-lg font-semibold text-white transition-all hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-35"
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
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Previous
            </button>
            <button
              disabled={!nextProduct}
              onClick={() =>
                nextProduct &&
                navigate(`/dashboard/shop/products/${nextProduct.id}`)
              }
              className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--secondary-color)] px-6 py-4 font-[display1] text-lg font-semibold text-black transition-all hover:bg-[#dfff52] disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="font-[display2] text-sm uppercase tracking-[0.35em] text-white/35">
             
            </p>
            <h2 className="mt-2 font-[display1] text-[24px] font-bold">Related Products</h2>
          </div>
          <button
            onClick={() => navigate("/dashboard/shop")}
            className="rounded-full border border-white/12 px-5 py-2 font-[display2] text-sm text-white/70 transition-all hover:border-white/30 hover:text-white"
          >
            View all products
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} elem={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsDetails;
