import React, { useContext, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { UserData } from "../context/MyContexr";

const formatCategoryLabel = (value) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const Home = () => {
  const products = useLoaderData();
  const navigate = useNavigate();
  const { loggedUser, cartItemsCount, cartSubtotal } = useContext(UserData);

  const name = loggedUser?.name?.split(" ")?.[0] || "Nihal";

  const topRatedProducts = useMemo(() => {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(0, 5);
  }, [products]);

  const newArrivalProducts = useMemo(() => {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(5, 10);
  }, [products]);

  const categoryCards = useMemo(() => {
    const groupedCategories = products.reduce((accumulator, product) => {
      accumulator[product.category] = (accumulator[product.category] || 0) + 1;
      return accumulator;
    }, {});

    return Object.entries(groupedCategories)
      .map(([slug, count]) => ({
        slug,
        count,
        label: formatCategoryLabel(slug),
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [products]);

  return (
    <div className="mt-24 h-full w-full pb-10 sm:mt-28">
      <div className="flex h-full w-full flex-col justify-between gap-8 rounded-2xl border-1 px-5 py-6 sm:px-8 sm:py-8 lg:flex-row lg:px-12 lg:py-10">
        <div>
          <h1 className="uppercase tracking-widest text-[#91B006]">Good morning</h1>
          <h1 className="mt-5 font-[display1] text-3xl font-bold sm:text-4xl lg:text-5xl">
            Welcome back, <br />
            <span className="text-[var(--secondary-color)]">{name}!</span>
          </h1>
          <p className="mt-4 font-[display2] font-medium text-[var(--grey-color)]">
            Discover today's picks hand-curated products across <br />
            electronics, fashion, and more.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <div
              onClick={() => {
                navigate("/dashboard/shop");
              }}
              className="flex w-fit cursor-pointer items-center gap-2 rounded-2xl bg-[var(--secondary-color)] px-6 py-3 font-[display2] font-medium text-black hover:bg-[#E2FF66]"
            >
              <button className="text-[14px] font-[600]">Shop Now</button>
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
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-2xl border-1 border-[#5D5E58] bg-transparent px-5 py-3 font-[display2] font-medium text-[var(--grey-color)] transition-all hover:border-white">
              <button
                onClick={() => {
                  navigate("/dashboard/shop");
                }}
                className="cursor-pointer text-[14px] font-[600]"
              >
                View All Products
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-col sm:justify-center">
            <div className="flex flex-col items-center justify-center rounded-2xl border-1 border-[#44510C] bg-[#23280F] p-5">
              <h1 className="font-[display1] text-4xl font-bold text-[var(--secondary-color)]">
                20+
              </h1>
              <p className="font-[display2] text-[12px] font-medium text-[var(--grey-color)]">
                Products Available
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border-1 p-5">
              <h1 className="font-[display1] text-2xl font-bold">Free</h1>
              <p className="font-[display2] text-[12px] font-medium text-[var(--grey-color)]">
                Delivery on 999+
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex items-start gap-4 rounded-2xl bg-[#111] p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#23280F] text-[var(--secondary-color)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
              <path d="M12 22V12"></path>
              <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
              <path d="m7.5 4.27 9 5.15"></path>
            </svg>
          </div>
          <div>
            <p className="font-[display1] text-2xl font-bold text-white">{cartItemsCount}</p>
            <p className="font-[display2] text-sm text-white/50">Cart Items</p>
            <p className="mt-0.5 font-[display2] text-xs text-white/25">In your bag</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl bg-[#111] p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#151C28] text-[#60A5FA]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-[display1] text-2xl font-bold text-white">
              ${cartSubtotal.toFixed(2)}
            </p>
            <p className="font-[display2] text-sm text-white/50">Cart Value</p>
            <p className="mt-0.5 font-[display2] text-xs text-white/25">
              Ready to checkout
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl bg-[#111] p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#281F10] text-[#FBBF24]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </div>
          <div>
            <p className="font-[display1] text-2xl font-bold text-white">5</p>
            <p className="font-[display2] text-sm text-white/50">Top Products</p>
            <p className="mt-0.5 font-[display2] text-xs text-white/25">Highly Rated</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl bg-[#111] p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#201828] text-[#C084FC]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </svg>
          </div>
          <div>
            <p className="font-[display1] text-2xl font-bold text-white">
              {categoryCards.length}
            </p>
            <p className="font-[display2] text-sm text-white/50">Categories</p>
            <p className="mt-0.5 font-[display2] text-xs text-white/25">To explore</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <h1 className="font-[display1] text-xl font-bold">Shop by Category</h1>
        <p
          onClick={() => {
            navigate("/dashboard/shop");
          }}
          className="cursor-pointer font-[display2] text-[14px] text-[var(--secondary-color)]"
        >
          View All <i className="ri-arrow-right-line"></i>
        </p>
      </div>

      <div className="my-5 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
        {categoryCards.map((category) => (
          <div
            key={category.slug}
            onClick={() =>
              navigate("/dashboard/shop", {
                state: { selectedCategory: category.slug },
              })
            }
            className="category-box flex cursor-pointer flex-col items-center justify-center rounded-2xl bg-white py-5 text-black"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3D1] font-[display1] text-lg font-bold text-[#91B006]">
              {category.label.charAt(0)}
            </div>
            <h1 className="px-3 text-center font-[display2] text-[14px] font-medium">
              {category.label}
            </h1>
            <p className="text-[12px] font-medium text-[var(--grey-color)]">
              {category.count} items
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 text-black xl:grid-cols-2">
        <div className="rounded-2xl bg-white p-5">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2 font-[display1] text-[18px] font-bold">
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
                className="fill-amber-400 text-amber-400"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              Top Rated
            </h1>
            <p
              onClick={() => {
                navigate("/dashboard/shop");
              }}
              className="cursor-pointer font-medium text-[12px] text-[var(--secondary-color)] hover:text-[#EEFF6B]"
            >
              See all <i className="ri-arrow-right-line"></i>
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            {topRatedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/dashboard/shop/products/${product.id}`)}
                className="flex cursor-pointer items-center justify-between rounded-2xl border-1 border-[#afafaf96] p-5"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={product.thumbnail || product.images?.[0]}
                    alt={product.title}
                    className="h-[30px] w-[30px] object-cover object-center"
                  />
                  <div>
                    <p className="text-[12px] font-medium font-[display2]">{product.title}</p>
                    <h1 className="font-[display1] font-bold text-[var(--secondary-color)]">
                      $ {product.price}
                    </h1>
                  </div>
                </div>
                <div className="cursor-pointer rounded-md bg-[#e2eeac75] p-2 text-[#C8F400] transition-all hover:bg-[#C8F400] hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
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
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2 font-[display1] text-[18px] font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#C8F400"
                stroke="#C8F400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              New Arrivals
            </h1>
            <p
              onClick={() => {
                navigate("/dashboard/shop");
              }}
              className="cursor-pointer font-medium text-[12px] text-[var(--secondary-color)] hover:text-[#EEFF6B]"
            >
              See all <i className="ri-arrow-right-line"></i>
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            {newArrivalProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/dashboard/shop/products/${product.id}`)}
                className="flex cursor-pointer items-center justify-between rounded-2xl border-1 border-[#afafaf96] p-5"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={product.thumbnail || product.images?.[0]}
                    alt={product.title}
                    className="h-[30px] w-[30px] object-cover object-center"
                  />
                  <div>
                    <p className="text-[12px] font-medium font-[display2]">{product.title}</p>
                    <h1 className="font-[display1] font-bold text-[var(--secondary-color)]">
                      $ {product.price}
                    </h1>
                  </div>
                </div>
                <div className="cursor-pointer rounded-md bg-[#e2eeac75] p-2 text-[#C8F400] transition-all hover:bg-[#C8F400] hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-20 mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:mb-30 xl:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-white bg-[#111] p-5 font-[display2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C8F400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          <div>
            <p className="text-sm font-semibold text-white/80">Fast Delivery</p>
            <p className="text-xs text-white/30">Same-day on select items</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-white bg-[#111] p-5 font-[display2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-400"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          </svg>
          <div>
            <p className="text-sm font-semibold text-white/80">Secure Payments</p>
            <p className="text-xs text-white/30">100% encrypted checkout</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-white bg-[#111] p-5 font-[display2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-400"
          >
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </svg>
          <div>
            <p className="text-sm font-semibold text-white/80">Best Prices</p>
            <p className="text-xs text-white/30">Price-match guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
