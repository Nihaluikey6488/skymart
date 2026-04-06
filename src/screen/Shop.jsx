import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const formatCategoryLabel = (value) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const Shop = () => {
  const products = useLoaderData();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [featured, setFeatured] = useState("featured");
  const deferredSearch = useDeferredValue(search);

  const categoryOptions = useMemo(() => {
    return [...new Set(products.map((product) => product.category))].sort((a, b) =>
      a.localeCompare(b),
    );
  }, [products]);

  useEffect(() => {
    const categoryFromState = location.state?.selectedCategory;

    if (categoryFromState && categoryOptions.includes(categoryFromState)) {
      setCategory(categoryFromState);
      return;
    }

    setCategory("all");
  }, [location.state, categoryOptions]);

  const filteredProducts = useMemo(() => {
    const trimmedSearch = deferredSearch.trim().toLowerCase();

    let nextProducts = [...products];

    if (trimmedSearch) {
      const searchTerms = trimmedSearch.split(/\s+/).filter(Boolean);

      nextProducts = nextProducts.filter((product) => {
        const searchableValues = [
          product.title,
          product.description,
          product.category,
          product.brand,
          ...(product.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchTerms.every((term) => searchableValues.includes(term));
      });
    }

    if (category !== "all") {
      nextProducts = nextProducts.filter((product) => product.category === category);
    }

    switch (featured) {
      case "high-to-low":
        nextProducts.sort((a, b) => b.price - a.price);
        break;
      case "low-to-high":
        nextProducts.sort((a, b) => a.price - b.price);
        break;
      case "top-rated":
        nextProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "lowest-rated":
        nextProducts.sort((a, b) => (a.rating || 0) - (b.rating || 0));
        break;
      default:
        break;
    }

    return nextProducts;
  }, [products, deferredSearch, category, featured]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setFeatured("featured");
  };

  return (
    <div className="mt-30 h-full w-full">
      <div>
        <h1 className="font-[display1] text-4xl font-bold">All Products</h1>
        <p className="py-2 font-[display2] text-[14px] font-medium text-[var(--grey-color)]">
          {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"} found
        </p>
      </div>

      <div className="mt-5 flex w-full items-center gap-4 rounded-2xl border border-white p-5">
        <div
          className="flex w-full items-center gap-3 rounded-2xl border border-white/15 p-3 
          transition-all duration-300 focus-within:border-lime-300 
          focus-within:shadow-[0_0_12px_rgba(163,230,53,0.6)]"
        >
          <i className="ri-search-line text-[var(--grey-color)]"></i>

          <input
            type="text"
            placeholder="Search products, categories, brands..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full border-none bg-transparent font-[display1] font-medium outline-none"
          />
        </div>

        <div
          className="w-64 cursor-pointer rounded-2xl border border-white/15 p-3
          transition-all duration-300 focus-within:border-lime-300
          focus-within:shadow-[0_0_15px_rgba(163,230,53,0.5)]"
        >
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full cursor-pointer border-none bg-black text-white outline-none"
          >
            <option value="all">All Categories</option>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {formatCategoryLabel(option)}
              </option>
            ))}
          </select>
        </div>

        <div
          className="w-64 cursor-pointer rounded-2xl border border-white/15 p-3
          transition-all duration-300 focus-within:border-lime-300
          focus-within:shadow-[0_0_15px_rgba(163,230,53,0.5)]"
        >
          <select
            value={featured}
            onChange={(event) => setFeatured(event.target.value)}
            className="w-full cursor-pointer border-none bg-black text-white outline-none"
          >
            <option value="featured">Featured</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="top-rated">Top Rated</option>
            <option value="lowest-rated">Lowest Rated</option>
          </select>
        </div>
      </div>

      {(search || category !== "all" || featured !== "featured") && (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <p className="font-[display2] text-sm text-[var(--grey-color)]">
            Active Filters:
          </p>

          {search && (
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm">
              Search: {search}
            </span>
          )}

          {category !== "all" && (
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm">
              Category: {formatCategoryLabel(category)}
            </span>
          )}

          {featured !== "featured" && (
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm">
              Sort: {featured}
            </span>
          )}

          <button
            onClick={clearFilters}
            className="rounded-full bg-[#C8F400] px-4 py-1 text-sm font-semibold text-black"
          >
            Clear Filters
          </button>
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="mt-5 grid gap-4 grid-cols-[1fr_1fr_1fr_1fr_1fr]">
          {filteredProducts.map((elem) => (
            <ProductCard key={elem.id} elem={elem} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#121212] px-8 py-14 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-white/10 bg-white/5 text-white/35">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <h2 className="mt-5 font-[display1] text-3xl font-bold">No products found</h2>
          <p className="mx-auto mt-3 max-w-[28rem] font-[display2] text-white/40">
            Try another product name, brand, category, or clear the filters to see more
            matching items.
          </p>
          <button
            onClick={clearFilters}
            className="mt-6 rounded-2xl bg-[var(--secondary-color)] px-6 py-3 font-[display1] text-base font-bold text-black"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
